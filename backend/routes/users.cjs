const router = require("express").Router();
const {
  User,
  validateLogin,
  validateRegistration,
} = require("../models/user.cjs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// router.post("/", async (req, res) => {
//   try {
//     const { error } = validateLogin(req.body);
//     if (error)
//       return res.status(400).send({ message: error.details[0].message });

//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user)
//       return res.status(401).send({ message: "Invalid Email or Password" });

//     const validPassword = await bcrypt.compare(password, user.password);
//     if (!validPassword)
//       return res.status(401).send({ message: "Invalid Email or Password" });

//     // Generate a JWT token containing the user ID
//     const token = jwt.sign({ _id: user._id }, process.env.JWTPRIVATEKEY, {
//       expiresIn: "7d",
//     });

//     // Send the token and user ID in the response
//     res.status(200).send({
//       data: { token, userId: user._id },
//       message: "Logged in successfully",
//     });

//     // Store the user ID in local storage
//     localStorage.setItem("userId", user._id); // Assuming localStorage is available in your backend environment
//   } catch (error) {
//     console.error("Error:", error.message);
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    const userCount = await User.countDocuments();
    res.status(200).send({ userCount, users });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user)
      return res.status(404).send({ message: "User with given ID not found" });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});
router.post("/", async (req, res) => {
  try {
    const { error } = validateRegistration(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    const user = await User.findOne({ email: req.body.email }); // You should use User, not UserActivation, assuming it's your user model
    console.log(user, "user");
    if (user)
      return res
        .status(409)
        .send({ message: "User with email already exists!" });
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const { role } = req.body; // This line seems incorrect, you probably want const { role } = req.body;
    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User created Successfully" });
  } catch (error) {
    console.log(error, "error");
    res.status(500).send({ message: "internal server error" });
  }
});

module.exports = router;

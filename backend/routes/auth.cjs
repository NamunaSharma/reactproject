const router = require("express").Router();
// const { User, validateLogin } = require("../models/user");
const { User, validateLogin } = require("../models/user.cjs"); // Assuming your user model file is in the models directory
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

router.post("/", async (req, res) => {
  try {
    const { error } = validateLogin(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).send({ message: "Invalid Email or Password" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(401).send({ message: "Invalid Email or Password" });

    // Generate a JWT token containing the user ID
    const token = jwt.sign({ _id: user._id }, process.env.JWTPRIVATEKEY, {
      expiresIn: "7d",
    });

    console.log("User ID:", user._id);
    console.log("Token:", token);

    res.status(200).send({
      data: { token, userId: user._id },
      message: "logged in successfully",
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;

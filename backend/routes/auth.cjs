// // const router = require("express").Router();
// // const { User } = require("../models/user.cjs");
// // const bcrypt = require("bcrypt");
// // const Joi = require("joi");

// // router.post("/", async (req, res) => {
// //   try {
// //     const { error } = validate(req.body);
// //     if (error)
// //       return res.status(400).send({ message: error.details[0].message });

// //     const user = await User.findOne({ email: req.body.email });
// //     if (!user)
// //       return res.status(401).send({ message: "Invalid Email or Password" });

// //     const validPassword = await bcrypt.compare(
// //       req.body.password,
// //       user.password
// //     );
// //     if (!validPassword)
// //       return res.status(401).send({ message: "Invalid Email or Password" });

// //     const token = user.generateAuthToken();
// //     console.log(token);
// //     // const token = user.jwt;

// //     res.status(200).send({ data: token, message: "logged in successfully" });
// //   } catch (error) {
// //     res.status(500).send({ message: "Internal Server Error" });
// //   }
// // });

// // const validate = (data) => {
// //   const schema = Joi.object({
// //     email: Joi.string().email().required().label("Email"),
// //     password: Joi.string().required().label("Password"),
// //   });
// //   return schema.validate(data);
// // };
// // module.exports = router;
// // // const router = require("express").Router();
// // // const { User, validate } = require("../models/user"); // Assuming this import is correct
// // // const bcrypt = require("bcrypt");

// // // //signup
// // // router.post("/", async (req, res) => {
// // //   try {
// // //     const { error } = validate(req.body);
// // //     if (error)
// // //       return res.status(400).send({ message: error.details[0].message });
// // //     const user = await User.findOne({ email: req.body.email }); // You should use User, not UserActivation, assuming it's your user model
// // //     console.log(user, "user");
// // //     if (user)
// // //       return res
// // //         .status(409)
// // //         .send({ message: "User with email already exists!" });
// // //     const salt = await bcrypt.genSalt(parseInt(process.env.SALT));
// // //     const hashPassword = await bcrypt.hash(req.body.password, salt);
// // //     const { role } = req.body; // This line seems incorrect, you probably want const { role } = req.body;
// // //     await new User({ ...req.body, password: hashPassword }).save();
// // //     res.status(201).send({ message: "User created Successfully" });
// // //   } catch (error) {
// // //     console.log(error, "error");
// // //     res.status(500).send({ message: "internal server error" });
// // //   }
// // // });

// // // module.exports = router;
// const router = require("express").Router();
// const { User } = require("../models/user.cjs");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const Joi = require("joi");

// router.post("/", async (req, res) => {
//   try {
//     const { error } = validate(req.body);
//     if (error)
//       return res.status(400).send({ message: error.details[0].message });

//     const user = await User.findOne({ email: req.body.email });
//     if (!user)
//       return res.status(401).send({ message: "Invalid Email or Password" });

//     const validPassword = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );
//     if (!validPassword)
//       return res.status(401).send({ message: "Invalid Email or Password" });

//     // Generate a JWT token containing the user ID
//     const token = jwt.sign({ _id: user._id }, process.env.JWTPRIVATEKEY, {
//       expiresIn: "7d",
//     });

//     res.status(200).send({
//       data: { token, userId: user._id },
//       message: "logged in successfully",

//     });
//   } catch (error) {
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

// const validate = (data) => {
//   const schema = Joi.object({
//     email: Joi.string().email().required().label("Email"),
//     password: Joi.string().required().label("Password"),
//   });
//   return schema.validate(data);

// };
// module.exports = router;
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

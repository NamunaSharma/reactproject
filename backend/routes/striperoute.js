// // // const express = require("express");
// // // // import express from "express";
// // // const stripe = require("stripe")(
// // //   "sk_test_51P4amLSAphL6wHSj9DWqm1HOhDqpW8pIL2Sav8LpuSJSyE585FizkvYrsoxLJy6e2QzTCSfNQdN5vnmyaTIMIoFZ00vN7fECpd"
// // // );
// // // const router = express.Router();
// // // const { v4: uuidv4 } = require("uuid");
// // // router.get("/", (req, res, next) => {
// // //   console.log("Get Response fjk");
// // //   res.json({
// // //     message: "It works",
// // //   });
// // // });

// // // router.post("/pay", (req, res, next) => {
// // //   console.log(req.body.token);
// // //   const { token, amount } = req.body;
// // //   const idempotencyKey = uuidv4();
// // //   return stripe.customers
// // //     .create({
// // //       email: token.email,
// // //       source: token.id,
// // //     })
// // //     .then((customer) => {
// // //       stripe.charges.create(
// // //         {
// // //           amount: amount * 100,
// // //           currency: "usd",
// // //           customer: customer.id,
// // //           receipt_email: token.email,
// // //         },
// // //         { idempotencyKey }
// // //       );
// // //     })
// // //     .then((result) => res.status(200).json(result))
// // //     .catch((err) => console.log(err));
// // // });
// // //  export default router;
// // const express = require("express");
// // const stripe = require("stripe")(
// //   "sk_test_51P4amLSAphL6wHSj9DWqm1HOhDqpW8pIL2Sav8LpuSJSyE585FizkvYrsoxLJy6e2QzTCSfNQdN5vnmyaTIMIoFZ00vN7fECpd"
// // );
// // const router = express.Router();
// // const { v4: uuidv4 } = require("uuid");

// // // Add middleware to parse JSON bodies
// // router.use(express.json());

// // router.get("/", (req, res, next) => {
// //   console.log("Get Response fjk");
// //   res.json({
// //     message: "It works",
// //   });
// // });

// // router.post("/pay", (req, res, next) => {
// //   console.log(req.body.token);
// //   const { token, amount } = req.body;
// //   const idempotencyKey = uuidv4();
// //   return stripe.customers
// //     .create({
// //       email: token.email,
// //       source: token.id,
// //     })
// //     .then((customer) => {
// //       return stripe.charges.create(
// //         {
// //           amount: amount * 100,
// //           currency: "usd",
// //           customer: customer.id,
// //           receipt_email: token.email,
// //         },
// //         // Pass idempotency key in an object
// //         { idempotencyKey: idempotencyKey }
// //       );
// //     })
// //     .then((result) => res.status(200).json(result))
// //     .catch((err) => console.log(err));
// // });

// // module.exports = router;

// const express = require("express")
// const app = express()
// require("dotenv").config()
// const cors = require("cors");
// app.use(express.json())
// app.use(cors())


// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

// app.post("/checkout",async(req,res)=>{
//   try{
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types:["card"],
//       mode: "payment",
//       line_items:req.body.items.map(item=>{
//         return {
//           price_date:{
//             currency:"inr",
//             product_date:{
//               name:item.name,
//               // description:item.description,
//               // images:[item.image]
//             },
//             unit_amount:(item.price)*100,
//           },
//           quantity:item.quantity
//         }
//       }),
//       success_url:"http://localhost:5555/success",
//       cancel_url:"http://localhost:5555/cancel"
//     })
//     res.json({url:session.url})
//   }catch (error){
//     res.status(500).json({error:error.message})

//   }
// })
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/reset.css";
import { CartProvider } from "./context/cart";
import { Stripe } from "react-stripe-checkout";
// import { RouterProvider } from "react-router-dom";
// import app from "./App";
import App from "./App";
// import router from "./routers/router.jsx

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={app} />
//   </React.StrictMode>
// );
ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </CartProvider>
);

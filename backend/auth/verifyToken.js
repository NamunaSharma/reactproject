import jwt from "jsonwebtoken";
import { Admin } from "../models/AdminSchma.js";
import Customer from "../models/user.cjs";

export const authenticate = async (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "No token, authorization denied!" });
  }

  try {
    const token = authToken.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.userId = decoded.id;
    req.role = decoded.role;

    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token is expired." });
    }
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

/**
 * Middleware to restrict access based on user roles.
 */
export const restrict = (roles) => async (req, res, next) => {
  const userId = req.userId;

  try {
    const customer = await Customer.findById(userId);
    const admin = await Admin.findById(userId);

    const user = customer || admin;

    if (!user || !roles.includes(user.role)) {
      return res
        .status(403)
        .json({ success: false, message: "You are not authorized." });
    }

    next();
  } catch (err) {
    console.error("Error in restrict middleware:", err);
    return res.status(500).json({ success: false, message: "Server error." });
  }
};

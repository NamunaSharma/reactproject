import express from "express";
import {
  createCategoryController,
  updateCategoryController,
  categoryControlller,
  deleteCategoryCOntroller,
  singleCategoryController,
  ccCategoryControlller,
  
} from "../controller/categoryController.js";

const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  //   requireSignIn,
  //   isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  //   requireSignIn,
  //   isAdmin,
  updateCategoryController
);

//getALl category
router.get("/get-category", categoryControlller);
router.get("/get-category/:id", ccCategoryControlller);
//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  //   requireSignIn,
  //   isAdmin,
  deleteCategoryCOntroller
);

export default router;

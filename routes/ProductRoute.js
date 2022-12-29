import express from "express";
import {
  deleteProduct,
  getProduct,
  addProduct,
  getProductById,
  updateProduct,
} from "../controllers/ProductController.js";

const router = express.Router();

router.get("/products", getProduct);
router.get("/products/:id", getProductById);
router.post("/products", addProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;

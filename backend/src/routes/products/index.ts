import { Router } from "express";

import {
  listProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./productsController.js";
import { validationData } from "../../middleware/validationMiddleware.js";
import { verifyToken, verifySeller } from "../../middleware/authMiddleware.js";

import {
  createProductSchema,
  updateProductSchema,
} from "../../db/productsSchema.js";

const router = Router();

router.get("/", listProducts);

router.get("/:id", getProductById);

router.post(
  "/",
  verifyToken,
  verifySeller,
  validationData(createProductSchema),
  createProduct
);

router.delete("/:id", verifyToken, verifySeller, deleteProduct);

router.put(
  "/:id",
  verifyToken,
  verifySeller,
  validationData(updateProductSchema),
  updateProduct
);

export default router;

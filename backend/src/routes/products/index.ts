import { Router } from "express";

import {
  listProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./productsController";
import { validationData } from "../../middleware/validationMiddleware";

import {
  createProductSchema,
  updateProductSchema,
} from "../../db/productsSchema";

const router = Router();

router.get("/", listProducts);

router.get("/:id", getProductById);

router.post("/", validationData(createProductSchema), createProduct);

router.delete("/:id", deleteProduct);

router.put("/:id", validationData(updateProductSchema), updateProduct);

export default router;

import { Router } from "express";
import {
  createOrder,
  getOrder,
  listOrders,
  updateOrder,
} from "./ordersController.js";
import { validationData } from "../../middleware/validationMiddleware.js";
import {
  insertOrderWithItemsSchema,
  updateOrderSchema,
} from "../../db/ordersSchema.js";
import { verifyToken } from "../../middleware/authMiddleware.js";

const router = Router();

router.post(
  "/",
  verifyToken,
  validationData(insertOrderWithItemsSchema),
  createOrder
);

router.get("/", verifyToken, listOrders);
router.get("/:id", verifyToken, getOrder);
router.put("/:id", verifyToken, validationData(updateOrderSchema), updateOrder);

export default router;

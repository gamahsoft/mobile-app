import { Router } from "express";
import { createPaymentIntent, getKeys } from "./stripeController.js";
import { verifyToken } from "../../middleware/authMiddleware.js";

const router = Router();

// Note: Guest users can get the publishable key
router.get("/keys", getKeys);

router.post("/payment-intent", verifyToken, createPaymentIntent);

// router.post("/webhook", webhook);

export default router;

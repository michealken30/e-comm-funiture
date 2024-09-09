import express from "express";
import UserAuth from "../middleware/UserAuth.js";
import {
  listOrders,
  placeholder,
  userOrder,
  verifyOrder,
} from "../contollers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", UserAuth, placeholder);
orderRouter.post("/verify", UserAuth, verifyOrder);
orderRouter.post("/userorders", UserAuth, userOrder);
orderRouter.get("/adminorders", UserAuth, listOrders);

export default orderRouter;
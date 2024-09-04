import express from "express";
import {
  addCart,
  listCartItem,
  removeFromCart,
} from "../contollers/cartDataController.js";
import UserAuth from "../middleware/UserAuth.js";

const cartRouter = express.Router();

cartRouter.post("/add", UserAuth, addCart);
cartRouter.post("/remove", UserAuth, removeFromCart);
cartRouter.post("/list", UserAuth, listCartItem);

export default cartRouter;

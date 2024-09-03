import express from "express";
import {
  addCart,
  listCartItem,
  removeFromCart,
} from "../contollers/cartDataController";

cartRouter = express.Router();

cartRouter.post("/add", addCart);
cartRouter.post("/remove", removeFromCart);
cartRouter.post("/list", listCartItem);

export default cartRouter;

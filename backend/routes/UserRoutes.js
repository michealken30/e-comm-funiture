import express from "express";
import { Login, Register } from "../contollers/UserControllers.js";

const UserRoute = express.Router();

UserRoute.post("/register", Register);
UserRoute.post("/login", Login);

export default UserRoute;

import express from "express";
import { Google, Login, Register } from "../contollers/UserControllers.js";
import User from "../models/userModels.js";

const UserRoute = express.Router();

UserRoute.post("/register", Register);
UserRoute.post("/login", Login);
UserRoute.post("/google", Google);

export default UserRoute;

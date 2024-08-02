import express from "express";
import {
  Google,
  Login,
  Register,
  requestPasswordReset,
  resetPassword,
} from "../contollers/UserControllers.js";

const UserRoute = express.Router();

UserRoute.post("/register", Register);
UserRoute.post("/login", Login);
UserRoute.post("/google", Google);
router.post("/request-password-reset", requestPasswordReset);
router.post("/reset-password", resetPassword);

export default UserRoute;

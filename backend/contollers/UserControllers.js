import validator from "validator";
import User from "../models/userModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateToken, storedToken } from "../utils/generateToken.js";
import { sendEmail } from "../utils/sendEmail.js";

const Register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExist = await User.findOne({ email: email });

    console.log(email);

    if (userExist) {
      return res
        .status(400)
        .json({ success: false, message: "User already exist" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please Enter Valid Email" });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password length must be morethan 8",
      });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, password: hashedPassword });

    const user = newUser.save();

    const token = createToken(user._id);

    res
      .status(200)
      .json({ success: true, token, message: "User Created Successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(401)
      .json({ success: false, message: "error, user not created" });
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY);
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User does not exist" });
    }

    const comparePasssword = await bcrypt.compare(password, user.password);

    if (!comparePasssword) {
      return res
        .status(500)
        .json({ success: false, message: "invalid credentials" });
    }

    const token = createToken(user._id);

    res.json({ success: true, token, message: "Login Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

const Google = async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      const { password: hashedPassword, ...rest } = user._doc;

      const token = createToken(user._id);

      res.status(200).json({ success: true, token });
    } else {
      const generatedPassword = Math.random().toString(36).slice(-8);
      Math.random().toString(36).slice(-8);

      const salt = await bcrypt.genSalt(10);

      const hashedPassword = await bcrypt.hash(generatedPassword, salt);

      const newUser = new User({
        email: req.body.email,
        password: hashedPassword,
        name: req.body.name,
      });

      console.log(newUser.name);

      const user = await newUser.save();

      const token = createToken(user._id);

      res.json({ success: true, token, message: "User Created Successfully" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error with continue with google" });
  }
};

const requestPasswordReset = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User does not exist" });
    }

    const resetToken = generateToken();
    const storedResetToken = storedToken(resetToken);
    user.storedResetToken = storedResetToken;
    user.resetTokenExpiry = Date.now() + 10 * 60 * 1000;

    await user.save();

    const resetLink = `${req.protocol}://${req.get(
      "host"
    )}/api/users/reset-password?token=${resetToken}`;
    await sendEmail(
      email,
      "Password Reset",
      `Please click this link to reset your password: ${resetLink}`
    );

    res
      .status(200)
      .json({ success: true, message: "Password reset link sent" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const resetPassword = async (req, res) => {
  const { token } = req.query;
  const { newPassword } = req.body;

  hashedtoken = storedToken(token);

  try {
    const user = await User.findOne({
      storedResetToken: hashedtoken,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or expired token" });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    user.storedResetToken = undefined;
    user.resetTokenExpiry = undefined;

    await user.save();

    res
      .status(200)
      .json({ success: true, message: "Password reset successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export { Register, Login, Google, requestPasswordReset, resetPassword };

import jwt, { decode } from "jsonwebtoken";

const UserAuth = async () => {
  const token = req.header.params;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "You are not Login, Please Login " });
  }

  try {
    decode_token = jwt.verify(token, process.env.SECRET_KEY);
    req.body.UserId = decode_token.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

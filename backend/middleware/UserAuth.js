import jwt, { decode } from "jsonwebtoken";

const UserAuth = async (req, res, next) => {
  const token = req.headers.token;
  console.log(token);
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "You are not Login, Please Login " });
  }

  try {
    const token_decode = jwt.verify(token, process.env.SECRET_KEY);
    console.log(token_decode);
    console.log(token_decode.id);
    req.body.userId = token_decode.id;
    console.log(req.body.UserId);
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

export default UserAuth;

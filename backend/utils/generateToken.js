import crypto from "crypto";

export const generateToken = () => {
  return crypto.randomBytes(32).toString("hex");
};

export const storedToken = (resetToken) => {
  crypto.createHash("sha256").update(resetToken).digest("hex");
};

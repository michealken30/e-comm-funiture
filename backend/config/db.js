import mongoose from "mongoose";

export const Db = async () => {
  await mongoose
    .connect(
      "mongodb+srv://kennethoshogwe:BVIupTIqnC02B5DZ@cluster0.nl8vlqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("database connected ");
    });
};

import express from "express";
import cors from "cors";
import "dotenv/config";
import { Db } from "./config/db.js";
import UserRoute from "./routes/UserRoutes.js";

const port = 4000;

const app = express();

app.use(express.json());
app.use(cors());

Db();

app.use("/api/my/user", UserRoute);

app.get("/", (req, res) => {
  res.send("You are welcome");
});

app.listen(port, () => {
  console.log(`App running at port ${port}`);
});

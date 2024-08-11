import express from "express";
import multer from "multer";
import {
  addFurniture,
  listFurniture,
  removeFurniture,
} from "../contollers/furnitureControllers.js";

const furnitureRouter = express.Router();

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()} ${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

furnitureRouter.post("/add", upload.single("image"), addFurniture);
furnitureRouter.get("/list", listFurniture);
furnitureRouter.post("/remove", removeFurniture);

export default furnitureRouter;
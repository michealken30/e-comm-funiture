import Furniture from "../models/furnitureModel.js";

const addFurniture = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  try {
    const furniture = new Furniture(req.body);
    furniture.image = image_filename;
    furniture.lastUpdated = Date.now();

    await furniture.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in adding food" });
  }
};

const listFurniture = async (req, res) => {
  try {
    const furnitures = await Furniture.find({});
    if (!furnitures) {
      return res.json({ success: false, message: "No furnitures found" });
    }

    res.json({ success: false, furnitures });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "failed to get furniture" });
  }
};

const removeFurniture = async (req, res) => {
  try {
    const furniture = await Furniture.findById(req.body.id);
    furniture.unlink(`uploads/${furniture.image}`, () => {});

    await Furniture.findByIdAndDelete(req.body.id);
    res.json({ success: false, message: "Furniture Removed " });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error removing Furniture" });
  }
};

export { addFurniture, listFurniture, removeFurniture };

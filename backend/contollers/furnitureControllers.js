import Furniture from "../models/furnitureModel.js";
import fs from "fs";

const addFurniture = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  try {
    const furniture = new Furniture(req.body);
    furniture.image = image_filename;
    furniture.lastUpdated = Date.now();

    await furniture.save();
    res.json({ success: true, message: "Furniture Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in adding furniture" });
  }
};

const listFurniture = async (req, res) => {
  try {
    const furnitures = await Furniture.find({});
    if (!furnitures) {
      return res.json({ success: false, message: "No furnitures found" });
    }

    res.json({ success: true, furnitures });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "failed to get furniture" });
  }
};

const removeFurniture = async (req, res) => {
  try {
    const furniture = await Furniture.findById(req.body.id);

    fs.unlink(`uploads/${furniture.image}`, () => {});

    await Furniture.findByIdAndDelete(req.body.id);

    res.json({ success: false, message: "Furniture Removed " });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error removing Furniture" });
  }
};

const updateFurniture = async (req, res) => {
  try {
    const furniture = await Furniture.findById(req.body.id);

    if (!furniture) {
      res.json({ success: false, message: "Furniture does not exist" });
    }

    furniture.name = req.body.name;
    furniture.description = req.body.description;
    furniture.short = req.body.short;
    furniture.category = req.body.category;
    furniture.best = req.body.best;
    furniture.seat = req.body.seat;
    furniture.frame = req.body.frame;
    furniture.colors = req.body.colors;
    furniture.priceCat = req.body.priceCat;
    furniture.oldPrice = req.body.oldPrice;
    furniture.newPrice = req.body.newPrice;
    furniture.lastUpdated = Date.now();

    if (req.file) {
      let image_filename = `${req.file.filename}`;
      furniture.image = image_filename;
    }

    furniture.save();
    res.json({ success: false, message: "Furniture updated Successfuly" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in adding furniture" });
  }
};

const searchFurniture = async (req, res) => {
  console.log(req.query);
  try {
    const searchQuery = req.query.searchQuery || "";
    const selectedCategories = req.query.selectedCategories || "";
    const selectedMaterials = req.query.selectedMaterials || "";
    const selectedColors = req.query.selectedColors || "";
    const priceRange = req.query.priceRange || "";
    const sortOption = req.query.sortOption || "lastUpdated";
    const page = parseInt(req.query.page) || 1;

    console.log(selectedColors);

    let query = {};

    if (searchQuery) {
      const searchRegex = new RegExp(searchQuery, i);
      query["$or"] = [{ nmae: searchRegex }, { description: searchRegex }];
    }

    if (selectedCategories) {
      const categoriesArray = selectedCategories.split(",");
      query["category"] = { $in: categoriesArray };
    }

    if (selectedMaterials) {
      const materialsArray = selectedMaterials.split(",");
      query["$or"] = [
        { seat: { $in: materialsArray } },
        { frame: { $in: materialsArray } },
      ];
    }

    if (selectedColors) {
      const colorsArray = selectedColors.split(",");
      query["colors"] = { $in: colorsArray };
    }

    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split(",").map(Number);

      query["newPrice"] = { $gte: minPrice, $lte: maxPrice };
    }

    const pageSize = 9;
    const skip = (page - 1) * pageSize;

    const furnitureItems = await Furniture.find(query)
      .sort({ [sortOption]: 1 })
      .skip(skip)
      .limit(pageSize)
      .lean();

    const total = await Furniture.countDocuments(query);

    const response = {
      data: furnitureItems,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / pageSize),
      },
    };

    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

export {
  addFurniture,
  listFurniture,
  removeFurniture,
  updateFurniture,
  searchFurniture,
};

import mongoose from "mongoose";

const furnitureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: Array,
    required: true,
  },
  seat: {
    type: Array,
    required: true,
  },
  best: {
    type: String,
    required: true,
  },

  frame: {
    type: Array,
    required: true,
  },
  colors: {
    type: Array,
    required: true,
  },
  priceCat: {
    type: Array,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  newPrice: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  lastUpdated: {
    type: Date,
    required: true,
  },
});

const Furniture = mongoose.model("Furniture", furnitureSchema);

export default Furniture;

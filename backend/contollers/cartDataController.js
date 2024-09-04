import User from "../models/userModels.js";

const addCart = async (req, res) => {
  console.log(req.body.userId);
  try {
    let userData = await User.findOne({ _id: req.body.userId });
    console.log(userData);
    let cartData = await userData.cartData;

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await User.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "added to cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Unable to add item" });
  }
};

const removeFromCart = async (req, res) => {
  try {
    let userData = await User.findOne({ _id: req.body.userId });
    let cartData = await userData.cartData;

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }

    res.json({ success: true, message: "Item removed from cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Unable to remove item" });
  }
};

const listCartItem = async (req, res) => {
  try {
    let userData = await User.findOne({ _id: req.body.userId });
    let cartData = await userData.cartData;

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "cart item not listed" });
  }
};

export { addCart, removeFromCart, listCartItem };

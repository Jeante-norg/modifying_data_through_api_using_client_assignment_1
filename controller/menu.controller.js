const menu = require("../model/menu.model.js");

const create = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    if (!name || !price) {
      return res
        .status(400)
        .json({ message: "Name and price are required fields." });
    }
    const menuData = new menu({ name, description, price });
    const newItem = await menuData.save();
    res
      .status(201)
      .json({ message: "New menu item created successfully", newItem });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const readALL = async (req, res) => {
  try {
    const menuData = await menu.find();
    if (menuData.length === 0) {
      return res.status(404).json({ message: "No items found" });
    }
    res.status(200).json(menuData);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { create, readALL };

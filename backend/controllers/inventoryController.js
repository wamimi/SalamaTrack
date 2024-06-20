const Inventory = require('../models/Inventory');

exports.addItem = async (req, res) => {
  try {
    const { itemName, quantity, location } = req.body;
    const newItem = await Inventory.create({ itemName, quantity, location });
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await Inventory.findAll();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

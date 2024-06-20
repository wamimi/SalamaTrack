const Shipment = require('../models/Shipment');

exports.createShipment = async (req, res) => {
  try {
    const { shipmentId, itemName, quantity, origin, destination } = req.body;
    const newShipment = await Shipment.create({ shipmentId, itemName, quantity, origin, destination });
    res.status(201).json(newShipment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getShipments = async (req, res) => {
  try {
    const shipments = await Shipment.findAll();
    res.status(200).json(shipments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

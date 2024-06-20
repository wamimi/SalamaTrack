const Request = require('../models/Request');

exports.createRequest = async (req, res) => {
  try {
    const { requesterName, itemName, quantity, location } = req.body;
    const newRequest = await Request.create({ requesterName, itemName, quantity, location });
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRequests = async (req, res) => {
  try {
    const requests = await Request.findAll();
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const express = require('express');
const router = express.Router();
const { createShipment, getShipments } = require('../controllers/shipmentController');

router.post('/create', createShipment);
router.get('/', getShipments);

module.exports = router;

const express = require('express');
const router = express.Router();
const { addItem, getItems } = require('../controllers/inventoryController');

router.post('/add', addItem);
router.get('/', getItems);

module.exports = router;

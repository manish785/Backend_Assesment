const express = require('express');
const router = express.Router();

const inventoryController = require('../controllers/inventory')


router.post('/inventory', inventoryController.create);



module.exports = router;
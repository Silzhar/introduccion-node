const express = require('express');

const productsController = require('../../controllers/v1/products-controller');

const router = express.Router();

router.post('/create', productsController.createUser);
router.post('/update', productsController.updateUser);
router.post('/delete', productsController.deleteUser);
router.post('/get-all', productsController.getUser);

module.exports = router;
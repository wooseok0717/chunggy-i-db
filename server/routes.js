const express = require('express');

const router = express.Router();
const controllers = require('./controllers')

// ***************** ITEMS *****************
// get a single item details with item number
router.get('/number', controllers.items.getItemWithNumber);

// get a single item details with item name
router.get('/name', controllers.items.getItemWithName);

// get all items with the given filter
router.get('/filter', controllers.items.filterItems);

// create new item with given form
router.post('/', controllers.items.addItem);

// update item details with given input
router.put('/', controllers.items.updateItem);

// delete item with given item number(name)
router.delete('/', controllers.items.deleteItem);

module.exports = router;
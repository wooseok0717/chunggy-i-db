const express = require('express');

const router = express.Router();
const controllers = require('./controllers')

// ***************** ITEMS *****************
// get a single item details with item number
router.get('/number', controllers.items.getItemWithNumber);

// get all items with param filter
router.get('/', controllers.items.getItems);

// get a single item details with item name
router.get('/name', controllers.items.getItemWithName);

// get all items with the given filter
router.get('/filter', controllers.items.filterItems);

// verify item by name
router.get('/verify/number', controllers.items.verifyByNumber);

// verify item by number
router.get('/verify/name', controllers.items.verifyByName);

// get items with set id
router.get('/setItems', controllers.items.getBySetId);

// create new item with given form
router.post('/', controllers.items.addItem);

// update item details with given input
router.put('/', controllers.items.updateItem);

// delete item with given item number(name)
router.delete('/', controllers.items.deleteItem);

// ***************** SETS *****************
// get a single set details with set id
router.get('/set/id', controllers.sets.getSetWithId);

// verify if the given set name is valid
router.get('/sets/verify/', controllers.sets.verify)

// get list of sets with input
router.get('/sets/:setName/', controllers.sets.getSetsWithName);

// create new set with given form
router.post('/set', controllers.sets.createASet);

// update a set with given details and id
router.put('/set', controllers.sets.updateASet);

// delete a set with given id
router.delete('/set', controllers.sets.deleteASet);

module.exports = router;
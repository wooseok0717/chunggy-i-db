const models = require('../models')

module.exports = {
  getItemWithNumber: (req, res) => {
    models.items.getSomething();
    console.log('items line 6', req.query.itemNumber)
    res.send(`${req.query.itemNumber} is the number`); // query items/number/?itemNumber=1111111
  },
  getItemWithName: (req, res) => {
    console.log(req.query.itemName)
    res.send(`${req.body.itemName} is the name`);
  },
  filterItems: (req, res) => {
    console.log(req.body);
    res.send('here are your results!');
  },
  addItem: (req, res) => {
    console.log(req.body);
    res.send('created?');
  },
  updateItem: (req, res) => {
    console.log(req.body);
    res.send('updated');
  },
  deleteItem: (req, res) => {
    res.send(`${req.query.itemNumber} is the number you deleted`); // query items/number/?itemNumber=1111111
  },
  verifyByNumber: (req, res) => {
    models.items.verifyByNumber(req.query.number, (data) => {
      res.send(data);
    });
  },
  verifyByName: (req, res) => {
    models.items.verifyByName(req.query.name, (data) => {
      res.send(data);
    })
  }
}
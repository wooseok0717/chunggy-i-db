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
  getItems: (req, res) => {
    const {part, type, grades, input, currentFilter, material} = req.query
    models.items.getItems(part, type, grades, input, currentFilter, material, (rows) => {
      res.send(rows)
    });
  },
  filterItems: (req, res) => {
    console.log(req.body);
    res.send('here are your results!');
  },
  addItem: (req, res) => {
    for (key in req.body) {
      if (req.body[key] === undefined) {
        req.body[key] = null;
      }
    }
    const total = {};
    const addToTotal = (obj) => {
      for (let key in obj) {
        if (typeof obj[key] === 'object') {
          total[key] = obj[key];
        } else if (total[key] === undefined) {
          total[key] = Number(obj[key]);
        } else {
          total[key] += Number(obj[key]);
        }
      }
    }
    addToTotal(req.body.lineOne);
    addToTotal(req.body.lineTwo);
    addToTotal(req.body.conditionOne);
    addToTotal(req.body.conditionTwo);
    const {
      itemNumber, itemName, part, type, material, grade, level, lineOne, lineTwo,
      conditionOne, conditionTwo, manastone, maxEnchant, setItem, currentUser,
      abyss, korean
    } = req.body;
    models.items.createAItem(itemNumber, itemName, part, type, material, grade, level, lineOne, lineTwo, conditionOne, conditionTwo, manastone, maxEnchant, setItem, currentUser, Date.now(), abyss, total, korean);
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
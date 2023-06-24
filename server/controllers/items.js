module.exports = {
  getItemWithNumber: (req, res) => {
    res.send(`${req.query.itemNumber} is the number`); // query items/number/?itemNumber=1111111
  },
  getItemWithName: (req, res) => {
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
  }
}
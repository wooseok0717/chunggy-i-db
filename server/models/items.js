const db = require('../db');

module.exports = {
  verifyByNumber: (number,cb) => {
    db.query(`SELECT * FROM items WHERE item_number = '${number}'`)
    .then(res => {
      cb(res.rows[0]);
    })
  },
  verifyByName: (name,cb) => {
    db.query(`SELECT * FROM items WHERE item_name = '${name}'`)
    .then(res => {
      cb(res.rows[0]);
    })
  }
}
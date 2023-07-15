const db = require('../db');

module.exports= {
  createASet: (name, stage1, stage1Req, stage2, stage2Req, hiddenEffect, hiddenReq, createdAt, creator, cb) => {
    const text = 'INSERT INTO sets (name, level_one_req, level_two_req, level_one_stat, level_two_stat, hidden_req, hidden_effect, created_at, creator) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)';
    const values = [name, stage1Req, stage2Req, stage1, stage2, hiddenReq, hiddenEffect, createdAt, creator];
    db.query(text, values);
    cb();
  },
  getSetsWithName: (input, cb) => {
    const text = `SELECT * FROM sets WHERE name LIKE '%${input}%'`
    db.query(text)
    .then(res => cb(res.rows));
  },
  verify: (input, cb) => {
    const text = 'SELECT * FROM sets WHERE name = $1'
    const values = [input]
    db.query(text,values)
    .then(res => {
      cb(res.rows[0]);
    })
  },
  getSetWithId: (id, cb) => {
    db.query(`SELECT * FROM sets WHERE id = ${id}`)
    .then(({rows}) => cb(rows[0]));
  }
}
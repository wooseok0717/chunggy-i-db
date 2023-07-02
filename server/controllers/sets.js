const models = require('../models');

module.exports = {
  getSetWithId: (req, res) => {
    console.log(req.query.setId);
    res.send(`setId you requested for is ${req.query.setId}`);
  },
  getSetsWithName: (req, res) => {
    models.sets.getSetsWithName(req.params.setName, (data) => {
      res.send(data);
    })
  },
  createASet: (req, res) => {
    console.log(req.body);
    const {
      name, stageOne, stageOneReq, stageTwo, stageTwoReq,
      hiddenEffect, hiddenReq
    } = req.body;
    const now = new Date();
    models.sets.createASet(name, stageOne, stageOneReq, stageTwo, stageTwoReq, hiddenEffect, hiddenReq, now, 'josh',() => {
      res.sendStatus(200);
    })
  },
  verify: (req, res) => {
    models.sets.verify(req.query.nameInput, (rows) => {
      res.send(rows);
    })
  },
  updateASet: (req, res) => {
    console.log(req.body);
    res.send('updated?');
  },
  deleteASet: (req, res) => {
    console.log(req.query.setId);
    res.send('deleted?');
  },
}
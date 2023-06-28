const models = require('../models');

module.exports = {
  getSetWithId: (req, res) => {
    console.log(req.query.setId);
    res.send(`setId you requested for is ${req.query.setId}`);
  },
  getSetsWithName: (req, res) => {
    console.log(req.body.setName);
    res.send(`set name you searched for is ${req.body.setName}`)
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
  updateASet: (req, res) => {
    console.log(req.body);
    res.send('updated?');
  },
  deleteASet: (req, res) => {
    console.log(req.query.setId);
    res.send('deleted?');
  },
}
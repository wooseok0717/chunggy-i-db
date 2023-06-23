const express = require('express');

const router = express.Router();

router.get('/:itemNumber', (req, res) => {
  res.send(req.params.itemNumber)
})

module.exports = router;
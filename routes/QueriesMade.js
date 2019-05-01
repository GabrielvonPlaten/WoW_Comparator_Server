const express = require('express');
const QueriesMade = require('../models/QueriesMade')
const router = new express.Router();

const fs = require('fs');
const path = require('path');

// Middleware
const adminAuth = require('../middleware/AdminAuth');

router.patch('/api/queries-made', async (req, res) => {
  try {
    QueriesMade.findOneAndUpdate({}, {
      $inc: { "queries": 1 }
    }).exec();

    res.status(200).send();
  } catch (err) {
    res.status(500).send();
  }
});

router.get('/api/queries-made', adminAuth, async (req, res) => {
  try {
    const queries = await QueriesMade.find();
    res.send(queries)
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
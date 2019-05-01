const express = require('express');
const WebsiteVisits = require('../models/WebsiteVisits')
const router = new express.Router();

const fs = require('fs');
const path = require('path');

// Middleware
const adminAuth = require('../middleware/AdminAuth');

router.patch('/api/website-visits', async (req, res) => {
  try {
    WebsiteVisits.findOneAndUpdate({}, {
      $inc: { "visits": 1 }
    }).exec();

    res.status(200).send();
  } catch (err) {
    res.status(500).send();
  }
});

router.get('/api/website-visits', adminAuth, async (req, res) => {
  try {
    const visits = await WebsiteVisits.find();
    res.send(visits)
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
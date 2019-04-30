const express = require('express');
const router = new express.Router();

const fs = require('fs');
const path = require('path');
const jsonFile = require('../json/website-style-data.json');

// Middleware
const adminAuth = require('../middleware/AdminAuth');

router.get('/api/jumbotron-bg-image', async (req, res) => {
  res.send(jsonFile)
});

router.patch('/api/jumbotron-bg-image', adminAuth, async (req, res) => {
  let newBgImage = req.body.jumbotronBgImage

  let obj = {
    jumbotronBgImage: newBgImage
  }

  try {
    fs.writeFileSync(path.join(__dirname, '../json/website-style-data.json'), JSON.stringify(obj))
    res.status(200).send()
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;


const express = require('express');
const Styles = require('../models/Styles');
const router = new express.Router();

const fs = require('fs');
const path = require('path');

// Middleware
const adminAuth = require('../middleware/AdminAuth');

router.post('/api/jumbotron-bg-image', adminAuth, async (req, res) => {
  let backgroundImage = req.body.backgroundImage;
  let name = req.body.name;

  const style = new Styles({
    name,
    backgroundImage,
  });

  try {
    await style.save();
    res.status(200).send();
  } catch (err) {
    res.status(500).send();
  }
})

router.get('/api/jumbotron-bg-image', async (req, res) => {
  try {
    const styles = await Styles.find().sort({ _id: -1 });
    res.send(styles)
  } catch (err) {
    res.status(500).send();
  }
});

router.patch('/api/jumbotron-bg-image/:id', adminAuth, async (req, res) => {
  let _id = req.params.id;
  let newBgImage = req.body.backgroundImage
  const updates = Object.keys(req.body);
  const allowedUpdates = ['backgroundImage'];
  const isValidOperation = updates.every(update => {
    return allowedUpdates.includes(update);
  })

  if (!isValidOperation) {
    return res.status(400).send({ err: "Invalid update"});
  }

  try {
    const style = await Styles.findOne({ _id });

    if (!style) {
      return res.status(404).send();
    };

    updates.forEach(update => {
      return style[update] = req.body[update];
    });

    await style.save();
    res.status(200).send();
  } catch (err) {
    res.status(500).send();
  }

});

module.exports = router;


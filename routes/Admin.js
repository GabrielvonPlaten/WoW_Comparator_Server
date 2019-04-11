const express = require('express');
const Admin = require('../models/Admin');
const router = new express.Router();

// Create User
router.post('/register/admin', async (req, res) => {
  const user = new Admin(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (err) {
    res.status(400).send(err);
  };
});

module.exports = router;
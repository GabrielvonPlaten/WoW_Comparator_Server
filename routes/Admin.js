const express = require('express');
const Admin = require('../models/Admin');
const router = new express.Router();

// Create Admin User
router.post('/register/admin', async (req, res) => {
  const admin = new Admin(req.body);

  try {
    await admin.save();
    const token = await admin.generateAuthToken();
    res.status(201).send({ admin, token });
  } catch (err) {
    res.status(400).send(err);
  };
});

router.post('/admin/login', async (req, res) => {
  let name = req.body.name;
  let password = req.body.password;

  try {
    console.log(name, password)
    const user = await Admin.findByCredentials(name, password);
    const token = await user.generateAuthToken();

    res.send({ user, token });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
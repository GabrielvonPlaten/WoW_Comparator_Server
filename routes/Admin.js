const express = require('express');
const AdminUser = require('../models/Admin');
const router = new express.Router();

// Create User
router.post('/register/admin', async (req, res) => {
  const admin = new AdminUser(req.body);

  try {
    await admin.save();
    res.status(201).send({ message: 'Admin Created!' });
  } catch (err) {
    res.status(400).send();
  };
});

module.exports = router;
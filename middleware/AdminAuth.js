const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const adminAuth = async(req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, '2r27rQl86shnp7q');
    const admin = await Admin.findOne({ _id: decoded._id, 'tokens.token': token })

    if (!admin) {
      throw new Error()
    }

    req.token = token;
    // Send the route to admin if the user is authenticated
    req.admin = admin;

    next();
  } catch (err) {
    res.status(401).send({ error: 'Please authenticate' });
  }
};

module.exports = adminAuth;
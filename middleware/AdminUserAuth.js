const jwt = require('jsonwebtoken');
const AdminUser = require('../models/Admin');

const adminAuth = async(req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer', '');
    const decoded = jwt.verify(token, '2r27rQl86shnp7q');
    const admin = await AdminUser.findOne({ _id: decoded.id, 'tokens.token': token })

    if (!admin) {
      throw new Error()
    }

    req.token = token;
    // Send the route to adminUser if the user is authenticated
    req.adminUser = adminUser;

    next();
  } catch (err) {
    res.status(401).send({ error: 'Please authenticate' });
  }
};

module.exports = adminAuth;
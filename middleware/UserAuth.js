const jwt = require('jsonwebtoken');
const User = require('../models/User');

const userAuth = async(req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, '797OQ1Qyz4O247H');
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

    if (!user) {
      throw new Error()
    }

    req.token = token;
    // Send the route to user if the user is authenticated
    req.user = user;

    next();
  } catch (err) {
    res.status(401).send({ error: 'Please authenticate' });
  }
};

module.exports = userAuth;
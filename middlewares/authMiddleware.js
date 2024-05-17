const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/User');

async function authenticateToken(req, res, next) {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    const user = await User.findById(decoded.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Forbidden' });
  }
}

module.exports = { authenticateToken };

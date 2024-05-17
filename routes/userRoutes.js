const express = require('express');
const userController = require('../controllers/userController');
const { authenticateToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/blogs', authenticateToken, userController.getUserBlogs);
// Implement other user routes

module.exports = router;

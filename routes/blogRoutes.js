const express = require('express');
const blogController = require('../controllers/blogController');
const { authenticateToken } = require('../middlewares/authMiddleware'); // Ensure this path is correct
const router = express.Router();

// POST route to create a new blog post
router.post('/', authenticateToken, blogController.createBlog);

// PUT route to update an existing blog post by ID
router.put('/:id', authenticateToken, blogController.updateBlog);

// Example GET route to fetch a blog post by ID
router.get('/:id', authenticateToken, blogController.getBlogById);

// Example DELETE route to delete a blog post by ID
router.delete('/:id', authenticateToken, blogController.deleteBlog);

// Export the router so it can be used in other parts of the application
module.exports = router;


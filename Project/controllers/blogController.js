const Blog = require('../models/Blog');
const User = require('../models/User');

async function createBlog(req, res) {
  try {
    const { title, description, tags, body } = req.body;
    const blog = await Blog.create({
      title,
      description,
      author: req.user._id,
      tags,
      body,
    });
    res.status(201).json({ blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateBlog(req, res) {
  try {
    const { id } = req.params;
    const { title, description, tags, body } = req.body;
    const blog = await Blog.findByIdAndUpdate(id, {
      title,
      description,
      tags,
      body,
    }, { new: true });
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.json({ blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Implement other blog controller functions (delete, get, list)

module.exports = { createBlog, updateBlog };

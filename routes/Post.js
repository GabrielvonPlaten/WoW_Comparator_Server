const express = require('express');
const Post = require('../models/Post');
const router = new express.Router();

// Auth Middleware
const adminAuth = require('../middleware/AdminAuth');

router.post('/api/create-post', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    subtitle: req.body.subtitle,
    blocks: req.body.outputData,
  });

  try {
    await post.save();
    res.status(201).send(post);
  } catch (err) {
    res.status(400).send()
  }
});

router.delete('/api/post/:id', adminAuth, async (req, res) => {
  try {
    const post = await Post.findOneAndDelete({ _id: req.params.id, });

    if (!post) {
      return res.status(404).send()
    }

    res.status(200).send(post)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ _id: -1 });
    res.send(posts)
  } catch (err) {
    res.status(500).send();
  }
})

module.exports = router;
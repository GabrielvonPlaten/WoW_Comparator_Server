const express = require('express');
const Post = require('../models/Post');
const router = new express.Router();

// Auth Middleware
const adminAuth = require('../middleware/AdminAuth');

router.post('/api/create-post', async (req, res) => {

  // Replace all white spaces with hyphens
  // Slugs are used on the route to a single post
  let slug = req.body.title;
  slug = slug.replace(/\s+/g, '-').toLowerCase();

  const post = new Post({
    title: req.body.title,
    subtitle: req.body.subtitle,
    slug,
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
});

router.get('/api/post/:id', async (req, res) => {
  let id = req.params.id

  try {
    const post = await Post.findById(id)
    
    if (!post) {
      return res.status(404).send()
    };

    res.send(post)
  } catch(err) {
    res.status(500).send(err)
  }
})

module.exports = router;
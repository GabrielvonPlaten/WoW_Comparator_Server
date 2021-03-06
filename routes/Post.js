const express = require('express');
const Post = require('../models/Post');
const Admin = require('../models/Admin');
const router = new express.Router();

// Auth Middleware
const adminAuth = require('../middleware/AdminAuth');

router.post('/api/create-post', adminAuth, async (req, res) => {
  // Replace all white spaces with hyphens
  // Slugs are used on the route to a single post
  let slug = req.body.title;
  slug = slug
    .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\s\{\}\[\]\\\/]/gi, '-')
    .toLowerCase();
  slug = slug.replace(/\s+/g, '-').toLowerCase();

  const post = new Post({
    title: req.body.title,
    subtitle: req.body.subtitle,
    slug,
    blocks: req.body.outputData,
    authorId: req.admin._id
  });

  try {
    await post.save();
    res.status(201).send(post);
  } catch (err) {
    res.status(400).send();
  }
});

router.delete('/api/post/:id', adminAuth, async (req, res) => {
  try {
    const post = await Post.findOneAndDelete({
      _id: req.params.id,
      authorId: req.admin._id
    });
    await post.populate('authorId').execPopulate();

    if (!post) {
      return res.status(404).send();
    }

    res.status(200).send(post);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ _id: -1 });
    res.send(posts);
  } catch (err) {
    res.status(500).send();
  }
});

router.get('/api/post/:id/:slug', async (req, res) => {
  const _id = req.params.id;
  const slug = req.params.slug;

  try {
    const post = await Post.find({ _id, slug });

    if (!post) {
      return res.status(404).send();
    }

    const author = await Admin.findById(post[0].authorId);
    res.send({ post, author: author.name });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;

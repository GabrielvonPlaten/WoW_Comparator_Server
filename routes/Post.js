const express = require('express');
const Post = require('../models/Post');
const router = new express.Router();

router.post('/api/create-post', async (req, res) => {
  console.log('-----------------')
  console.log(JSON.stringify(req.body, undefined, 2))

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

router.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ _id: -1 });
    res.send(posts)
  } catch (err) {
    res.status(500).send();
  }
})

module.exports = router;
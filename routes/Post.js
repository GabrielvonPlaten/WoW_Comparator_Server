const express = require('express');
const Post = require('../models/Post');
const router = new express.Router();

router.post('/api/create-post', async (req, res) => {
  console.log(JSON.stringify(req.body, undefined, 2))

  const post = new Post({
    blocks: req.body.outputData,
    title: req.body.title,
  });

  try {
    await post.save();
    res.status(201).send(post);
  } catch (err) {
    res.status(400).send()
  }
});

module.exports = router;
const express = require('express');
const axios = require('axios');
const User = require('../models/User');

// Middleware
const userAuth = require('../middleware/UserAuth');

const router = new express.Router();

// Create User
router.post('/api/register', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (err) {
    res.status(400).send(err);
  };
});

router.post('/api/login', async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();

    res.send({ user, token });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/api/logout', userAuth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token !== req.token
    });

    await req.user.save();

    res.send();
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/api/logout-all', userAuth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (err) {
    res.status(500).send();
  }
});

// Favorite Character Routes
router.patch('/api/addFavoriteChar', userAuth, async (req, res) => {
  let _id = req.user._id;
  let name = req.body.name;
  let realm = req.body.realm;
  let region = req.body.region;
  let access_token = "";

  await axios.get('http://wow-comparator.com/api/comparator')
    .then(async response => {
      access_token = await response.data.access_token
      // Search the character by the user's inputs.
      return axios.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${name}?locale=en_US&access_token=${access_token}`)
    })
    // Proceed if the character exists
    .then(async response => {
      const user = await User.findOne({ _id });
      // Add the name, realm and region of the character to the user's favorite character list
      user.favoriteChars = await [...user.favoriteChars, { "character.name": name, "character.realm": realm, "character.region": region }];
      user.save();
      res.status(201).send()
    })
    .catch(err => res.status(500).send());
});


// Delete Character from the Favorite List
router.delete('/api/getFavoriteChar/:id', userAuth, async (req, res) => {
  let _id = req.params.id
  
  try {
    await User.findOneAndUpdate(
      { _id: req.user._id }, 
      { $pull: { favoriteChars: { _id }}});

    res.status(200).send()
  } catch (err) {
    res.status(500).send();
  }
});


// Get Profile Info
router.get('/api/profile', userAuth, async (req, res) => {
  res.send(req.user);
});

module.exports = router;
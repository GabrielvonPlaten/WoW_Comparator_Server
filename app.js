require('dotenv').config()
require('./db/server');
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

// Routes
const postRoutes = require('./routes/Post');
const adminUserRoutes = require('./routes/Admin');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Use Routes
app.use(postRoutes);
app.use(adminUserRoutes);


app.get('/api/comparator', async (req, res) => {
  await axios.get(`https://us.battle.net/oauth/token?grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`)
    .then(response => res.send(response.data))
    .catch(err => res.send({
      errorMessage: "The API could not be reached.",
    }))
});

if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle Single Page Application
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('App listening on port ' + port);
});

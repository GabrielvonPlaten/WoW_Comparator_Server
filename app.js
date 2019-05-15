require('dotenv').config()
require('./db/server');
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

// Routes
const websiteStyles = require('./routes/Website_Styles');
const WebsiteVisits = require('./routes/WebsiteVisits');
const QueriesMade = require('./routes/QueriesMade');
const User = require('./routes/User');
const postRoutes = require('./routes/Post');
const admin = require('./routes/Admin');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Use Routes
app.use(websiteStyles); 
app.use(WebsiteVisits)
app.use(QueriesMade)
app.use(postRoutes);
app.use(admin);
app.use(User);

// Get a time-limited access_token to fetch the rest of the Game Data APIs
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

require('dotenv').config()
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api', (req, res) => {
  axios.get(`https://us.battle.net/oauth/token?grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`)
    .then(response => res.send(response.data))
    .catch(err => res.send({
      errorMessage: "The API could not be reached.",
    }))
});

app.use(express.static(__dirname + '/dist/'));
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/dist/index.html'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('App listening on port ' + port);
});

const express = require('express');
const router = new express.Router();

const fs = require('fs');
const path = require('path');
const jsonFile = require('../json/total-requests.json');

// Middleware
const adminAuth = require('../middleware/AdminAuth');

router.get('/api/total-requests', adminAuth, async (req, res) => {
  res.send(jsonFile)
});

router.post('/api/website-visits', async (req, res) => {
  let jsonStr = JSON.stringify(jsonFile);
  let jsonObj = JSON.parse(jsonStr);
  jsonObj.websiteVisits++;
  
  let jsonContent = JSON.stringify(jsonObj);
  
  fs.writeFile(path.join(__dirname, "../json/total-requests.json"), jsonContent, 'utf8', function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }
    
    console.log("JSON file has been saved.");
  });
});

router.post('/api/comparator-queries-requests', async (req, res) => {
  let jsonStr = JSON.stringify(jsonFile);
  let jsonObj = JSON.parse(jsonStr);
  jsonObj.comparatorQueriesMade++;
  
  let jsonContent = JSON.stringify(jsonObj);
  
  fs.writeFile(path.join(__dirname, "../json/total-requests.json"), jsonContent, 'utf8', function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }
    
    console.log("JSON file has been saved.");
  });
})

module.exports = router;
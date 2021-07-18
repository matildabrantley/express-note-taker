const path = require('path');
const notesData = require('../data/db.json');
const fs = require('fs');


//All Routing
module.exports = (app) => {
  //HTML Routing
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  //API Routing
  app.get('/api/notes', (req, res) => res.json(notesData));

  app.post('/api/notes', (req, res) => {
    fs.writeFileSync('db.json', req.body);
  });
};

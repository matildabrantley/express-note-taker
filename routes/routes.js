const path = require('path');
const notesData = require('../public/db.json');
const fs = require('fs');

//All Routing
module.exports = (app) => {
  //HTML Routing
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  //API Routing
   app.get('/api/notes', (req, res) => res.json(notesData));

  app.post('/api/notes', (req, res) => {
    let filePath = path.join(__dirname, '../public/db.json');
    notesData.push(req.body);
    fs.writeFile(filePath, JSON.stringify(notesData), function() {});
  });
  
  // using fs.appendFile
  // app.post('/api/notes', (req, res) => {
  //   let filePath = path.join(__dirname, '../public/db.json');
  //   fs.appendFile(filePath, JSON.stringify(req.body), function() {
  //     res.end();
  //   });
  // });
};

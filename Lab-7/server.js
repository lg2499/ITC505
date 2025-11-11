const express = require('express');
const logger = require('morgan');
const path = require('path');
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(logger('dev'));

// Serve static files from "public"
const publicServedFilesPath = path.join(__dirname, 'public');
server.use(express.static(publicServedFilesPath));

// Mad Lib form submission handler
server.post('/ITC505/lab-7/index.html', (req, res) => {
  const { noun, verb, adjective, place, animal } = req.body;

  if (!noun || !verb || !adjective || !place || !animal) {
    res.send(`
      <h1>Submission Failed</h1>
      <p>Please fill out <strong>ALL</strong> fields.</p>
      <a href="/ITC505/lab-7/index.html">Go Back to Form</a>
    `);
    return;
  }

  const madLib = `
    Once upon a time in ${place}, there was a ${adjective} ${animal} named ${noun}.
    Every morning, it loved to ${verb} by the river while singing cheerful songs.
    One day, ${noun} met a group of travelers who joined in and made ${place} the happiest place ever!
  `;

  res.send(`
    <h1>Your Mad Lib Story</h1>
    <p>${madLib}</p>
    <a href="/ITC505/lab-7/index.html">Go Back to Form</a>
  `);
});

// Port setup
let port = 80;
if (process.argv[2] === 'local') port = 8080;

server.listen(port, () => console.log('Ready on localhost!'));

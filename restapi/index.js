'use strict';

// import getSum from './getSum';
const gs = require('./getSum');

// Init Express Server
const port = 8880
const express = require('express');
const app = express();

// GET request
app.get('/wiki_request/:obj?', (req, res) =>
    gs.getSum(`https://en.wikipedia.org/api/rest_v1/page/summary/${req.params.obj}`).then(data => res.send(data))  
);

// start server
app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);
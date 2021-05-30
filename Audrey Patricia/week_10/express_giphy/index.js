const express = require('express');
const ejs = require('ejs');
const axios = require('axios');

const server = express();
server.use(express.static('public'));
server.set('view-engine', ejs);
const PORT = 1337;

server.get('/', (req, res) => {
  res.send("Hello World");
});

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }/`));

const express = require('express');
const ejs = require('ejs');
const quote = require('stock-quote');
const axios = require('axios');

const server = express();
server.use(express.static('public'));
server.set('view-engine', ejs);
const PORT = 1337;

server.get('/', (req, res) => {
  axios.get('https://api.giphy.com/v1/gifs/search?api_key=ums3QL3l8ROfJk6nP6eyyt7rEUaaFkuK&limit=30&q=Hi').then((response) => {
    let image = response.data.data[14].images.original.url;
      res.render('home.ejs', {image: image});
  });

});

server.get('/stock', (req, res) => {
  res.render('stock.ejs');
});

server.get('/quote', (req, res) => {
  let stockSymbol = (req.query.symbol).toUpperCase();
  quote.getQuote(stockSymbol).then( (response) => {
    console.log(response.currentPrice);
    res.render('price.ejs', { price: response.currentPrice, symbol: stockSymbol });
  });

});

server.get('/gif-search', (req, res) => {
  res.render('gif-search.ejs');
});

server.get('/giphy-result', (req, res) => {
  let searchTerm = req.query.search;
  let limit = req.query.amount
  let key = "ums3QL3l8ROfJk6nP6eyyt7rEUaaFkuK";

  axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&limit=${limit}&q=${searchTerm}`).then((response) => {
    // console.log(response.data.data["0"].images.original.url);
    let data = response.data.data;
    console.log(data.length);
    res.render('images.ejs', { data: data, searchTerm: searchTerm });
  });

  // res.send(searchTerm);
});

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }/`))

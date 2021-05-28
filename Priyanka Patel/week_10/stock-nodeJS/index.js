const express = require('express');
const ejs = require('ejs');
const quote = require ('stock-quote')
const server = express();

server.use(express.static('public')) //for css
server.set('view-engine', ejs);
const PORT = 1337; //set port

server.get('/', (req, res) => {
  res.render('stock.ejs')
})

server.get('/search', (req, res) => {
  console.log(req.query.symbol);
  quote.getQuote(req.query.symbol) // get symbol from input
  .then((response) => {
    const name = response.symbol
    const stock = response.currentPrice
    console.log(stock);
    res.render('result.ejs', {
      name: name,
      stock: stock})
  });
})

server.listen(PORT, () => console.log(`Now serving on http://localhost: ${ PORT }/`))

const express = require('express');
const ejs = require('ejs')
const books = require('google-books-search');
const server = express();
server.use(express.static('public')) //to use files in css
server.set('view-engine', ejs);

const PORT = 1337;

server.get('/', (req, res) => {
  res.render('book_search.ejs')
})

server.get('/search', (req, res) => {
  books.search(req.query.title, function(error, results) {
      if ( ! error ) {
          const author = results[0]["authors"]
          const cover = results[0]["thumbnail"]

          res.render('result.ejs', {
            cover: cover,
            author: author
          })

      } else {
          console.log(error);
      }
    })
})

server.listen(PORT, () => console.log(`Now serving on http://localhost: ${ PORT }/`))

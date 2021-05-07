const fetchBook = function () {

  const query = document.getElementById('search').value;

  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const cover = document.getElementById("cover");
  const description = document.getElementById("description");

  $.ajax("https://www.googleapis.com/books/v1/volumes?q=" + query).done(function (info) {

    const Title = info.items[0]["volumeInfo"]["title"]
    const Author = info.items[0]["volumeInfo"]["authors"];
    const Image = info.items[0]["volumeInfo"]["imageLinks"]["thumbnail"];
    const Description = info.items[0]["volumeInfo"]["description"]

    title.innerHTML = `${Title}`;
    author.innerHTML = `${Author}`;
    cover.innerHTML = `<img src='${Image}'>`;
    description.innerHTML = `${Description}`;

  })
};

//Attach the event handler to a DOM node
document.getElementById('enter').addEventListener('click', fetchBook)

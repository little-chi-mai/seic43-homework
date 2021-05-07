const fetchBookCover = function (event) {
  event.preventDefault(); // dont leave this page

  const xhr = new XMLHttpRequest();

  const input = document.getElementById('input').value;

  xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:' + input);
  xhr.send();

  xhr.onreadystatechange = function () {
    if(xhr.readyState !== 4){
      return;
    };

    const data = JSON.parse( xhr.responseText );
    const img = document.createElement('img');
    img.src = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];
    document.getElementById('image-display').appendChild(img);

  };

};
document.getElementById('search-form').addEventListener('submit', fetchBookCover);

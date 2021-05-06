const librarian = function (event) {
  event.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {

    if (xhr.readyState !== 4) {
      return;
    };

    const data = JSON.parse(xhr.responseText);

    const dragon = document.getElementById('dragon');
    if (dragon !== null) {
      dragon.remove();
    }

    const container = document.getElementById('container');

    let title = document.getElementsByClassName('title')[0];
    if (!title){
      title = document.createElement ('h1');
    }
    title.innerHTML = data["items"][0]["volumeInfo"]["title"];
    title.className = 'title';
    container.appendChild(title);

    let bookCover = document.getElementsByClassName('cover-image')[0];
    if(!bookCover){
      bookCover = document.createElement ('IMG');
    }
    bookCover.src = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];
    bookCover.className = 'cover-image';
    container.appendChild(bookCover);

    let description = document.getElementsByClassName('description')[0];
    if(!description){
      description = document.createElement ('p');
    }
    description.innerHTML = data["items"][0]["volumeInfo"]["description"];
    description.className = 'description';
    container.appendChild(description);
  };

  const chosen_title = document.getElementById('searched_title').value;

  xhr.open('GET', ("https://www.googleapis.com/books/v1/volumes?q=title:" + chosen_title)); // saves in response text
  xhr.send();

};

document.getElementById('search-button').addEventListener('click', librarian);

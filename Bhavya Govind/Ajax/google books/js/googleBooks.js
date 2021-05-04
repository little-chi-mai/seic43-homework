const fetchBookCover = function(){
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return; // Not ready yet.
    }
    const data = JSON.parse(xhr.responseText);
    thumbnail = data["items"][0]['volumeInfo']['imageLinks']['thumbnail'];
    const img = document.createElement('img'); // detached DOM node
    img.src = thumbnail;
    document.body.appendChild(img);
  }
  bookTitle = document.getElementById('bookName').value;
  xhr.open('GET', "https://www.googleapis.com/books/v1/volumes?q=title:${bookTitle}");
  xhr.send();
};

console.log("hello");
document.getElementById('fetch').addEventListener('click', fetchBookCover);

//"https://www.googleapis.com/books/v1/volumes?q=title:

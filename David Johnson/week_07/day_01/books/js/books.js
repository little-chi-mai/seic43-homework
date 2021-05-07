const termGrab = function () {
  const searchTerm = document.getElementById("search-term").value;
  console.log(searchTerm);
  return searchTerm;
}

searchButton = document.getElementById('search-button')

/////////////////////

const fetchBook = function () {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${termGrab()}`);
  xhr.send(); // asynchronous

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    console.log(xhr.responseText);
  };
};

searchButton.addEventListener('click', fetchBook);

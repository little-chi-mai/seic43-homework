const searchBook = function () {
  //get the booktitle
  const title = document.getElementById('booktitle').value;
  //fetch book info
  //get XHR object
  const xhr = new XMLHttpRequest();
  //open the connection

  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${title}`);
  //send request
  xhr.send();

  //add onreadystatechange
  //wait for readyState ==4
  //display cover
  // get the value of input field

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }
    console.log(xhr.responseText);
    const data = JSON.parse(xhr.responseText); //will return javascript Object

    let author = data ["items"][0]["volumeInfo"]["authors"]
    let cover = data ["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    // let cover = data.items[0].volumeInfo.imageLinks.thumbnail

    const p = document.createElement('p');
    p.innerHTML = `Author: ${author}`;
    document.body.appendChild(p);

    const image = document.createElement("img");
    image.src = cover;
    document.body.appendChild(image);
  };
};

document.getElementById('search').addEventListener('click', searchBook);
// document.getElementById('clear').addEventListener('click', clearScreen);

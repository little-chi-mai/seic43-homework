const fetchFact = function () {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return; // Not ready yet.
    }

    // Convert the JSON text from the API into a real JS object.
    const data = JSON.parse(xhr.responseText);
    console.log(data); //data for the books
      
   
      
    const img = document.createElement('img');
    img.src = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];
    console.log(data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]);
    document.body.appendChild(img); // attach the DOM node
  };
    const bookName = document.getElementById('title').value
    console.log(bookName);//get bookName
    
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${bookName}`)
  xhr.send(); // asynchronous
};

// Attach the event handler to a DOM node
document.getElementById('search').addEventListener('click', fetchFact);

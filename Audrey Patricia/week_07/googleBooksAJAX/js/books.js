  const xhr = new XMLHttpRequest();

document.getElementById('search').addEventListener('click', function(){

  let title = document.getElementById('search_title').value
  let url = `https://www.googleapis.com/books/v1/volumes?q=title:${title}`
  xhr.open('GET', url);
  xhr.send();

  xhr.onreadystatechange = function() {
    if(xhr.readyState != 4){
      return;
    }

    let data = JSON.parse(xhr.responseText);
    console.log(data);

    let thumbnail = data.items[0].volumeInfo.imageLinks.thumbnail;
    let bookTitle = data.items[0].volumeInfo.title;
    let publisher = data.items[0].volumeInfo.publisher;
    let authors = data.items[0].volumeInfo.authors.join("");
    let description = data.items[0].volumeInfo.description;
    let prevLink = data.items[0].volumeInfo.previewLink;
    let publishDate = data.items[0].volumeInfo.publishedDate;

    let display_section = document.querySelector(".display_section")
    for(let i = 0; i< display_section.classList.length; i++){
      let hidden = false;

      if(display_section.classList[i] === "hidden"){
        hidden = true;
      }

      if(hidden === true){
        document.querySelector('.display_section').classList.remove("hidden");
      }
    }

    document.querySelector('.thumbnail').setAttribute("src", thumbnail);
    document.querySelector('.title').innerHTML = bookTitle;
    document.querySelector('.authors').innerHTML = authors;
    document.querySelector('.publisher').innerHTML = publisher;
    document.querySelector('.publishDate').innerHTML = publishDate;
    document.querySelector('.description').innerHTML = description;



  };

});

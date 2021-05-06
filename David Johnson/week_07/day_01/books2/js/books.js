const fetchBook = function () {
  const title = $('#search-term').val()
  $.ajax('https://www.googleapis.com/books/v1/volumes?q=title:'+title).done(function (data) {
  console.log(data);
  const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
  console.log(cover);
  $('#cover').attr('src', cover);
  });
}

$('#search-button').on('click', fetchBook);

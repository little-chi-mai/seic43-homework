const searchFlickr = function (keywords, page = 1) {
  console.log('Searching for', keywords);
  const flikrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flikrURL, {
    method: 'flickr.photos.search', //not to be confused with HTTP methods like GET/POST
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    page: page
  }).done(showImages).done(function (info) {
    console.log(info);
    console.log(info.photos.pages);
    if(page >= info.photos.pages){
      console.log("no more results");
      localStorage.setItem("maxPage", info.photos.pages);
    }
  });
};

const showImages = function (results) {
  console.log(results);
  _(results.photos.photo).each(function (photo) {

    //generate a URL from the photo object
    const thumbnailURL = generateURL(photo);
    //display the image at that url
    const $img = $('<img>', {src: thumbnailURL, alt: photo.title, class: "col-md-2"}); // equivalent to .attr('src', thumbnailURL)
    $img.appendTo('#images');
  });
};

const generateURL = function (p) {
  return [
    'http://farm',
    p.farm,
    '.static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
    '_q.jpg' // change 'q' to something else for different sizes (see docs)
  ].join('')
};

$(document).ready(function () {
  console.log(_.VERSION);
  $('#search').on('submit', function(event) {
    event.preventDefault(); // to prevent the natural action of a form to try to find another page, disable the form from being submitted to the server

    $('#images').empty();
    localStorage.clear();
    //get search terms
    const searchTerms = $('#query').val();
    //do the search ==> searchFlickr();
    searchFlickr(searchTerms);
  });

  $(window).on('scroll', function () {
    // calculates the scroll bottom
    const scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height();
    // if scroll bottom < 200
    if(localStorage.getItem("page") === null){
      i = 2;
    } else {
      i = localStorage.getItem("page");
    }

    if(localStorage.getItem("maxPage") === null ){
      if(scrollBottom < 400){
        const searchTerms = $('#query').val();
        searchFlickr(searchTerms, i); //page 1 again: HW get the next page
        i++;
        localStorage.setItem("page", i);
      } // slow down the api call -> underscore in function
    } else{
      const $p = $('<p>No more photos to display</p>');
      $p.appendTo('#images');
    }
      // search Flickr again
  });

  if (sessionStorage.getItem("is_reloaded")){
    localStorage.clear();
  }
});

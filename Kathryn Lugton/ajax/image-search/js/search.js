const searchFlickr = function (keywords) {
  console.log('Searching for', keywords);



  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; //JSONP
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', //not to be confused with HTTP methods like GET/POST
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    page: page++,
  }).done(showImages).done(function (info){
    console.log(info);
  });
};
const showImages = function (results) {
  _(results.photos.photo).each(function (photo){
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL, alt: photo.title});
    $img.appendTo('#images');
  })
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
    '_q.jpg' //change 'q' to something else for different sizes (see docs)
  ].join('');
}

$(document).ready(function () {
  $('#search').on('submit', function (event){
      event.preventDefault(); //disable the form being submitted to the server

      $('#images').empty();

    const searchTerms = $('#query').val();
    searchFlickr(searchTerms);
  });

//very twitchy
  $(window).on('scroll', function (){
    const scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height();
    if (scrollBottom < 400) {
      const searchTerms = $('#query').val();
      searchFlickr(searchTerms);
    }
  });
});

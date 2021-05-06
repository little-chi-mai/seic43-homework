const state = {
  nextPage: 1,
  lastPageReached: false;
}


const searchFlickr = function (keywords) {
  console.log('Searching for', keywords);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    page: nextPage++
  }).done(showImages).done(function (info) {
    console.log(info);
    if (info.photos.page >= info.photos.pages) {
      console.log('last page reached');
    }
  });
};

const showImages = function (results) {
  _(results.photos.photo).each(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL, alt: photo.title});
    $img.appendTo('#images');
  });

  // generate a URL from the photo object
  // display the image
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
    '_q.jpg' // can change q to something else for different sizes.
  ].join('')
};

$(document).ready(function () {

 $('#search').on('submit', function (event) {

   event.preventDefault(); // prevents us from being redirected after submitting the form.

   $('#images').empty();

   //get the search terms
   const searchTerms = $('#query').val();
   searchFlickr(searchTerms);
 });

 $(window).on('scroll', function () {
   //calculate the scroll bottom
   const scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height();
   console.log(scrollBottom);
   //if the scroll bottom < 200 px
   if (scrollBottom < 400) {
     const searchTerms = $('#query').val();
     _.throttle(searchFlickr(searchTerms), 200); // get page 2;
   }
    // searchFlickr again
 });
});

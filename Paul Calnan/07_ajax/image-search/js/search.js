
const state = {
  nextPage: 1,
  lastPageReached: false, // global variable best stored in an object
  // requestInProgress: false // check if request in progress, limit too many requests
};

const searchFlickr = function(keywords) {
   if (state.lastPageReached) { // (state.lastPageReached || state.requestInProgress)
    return; // Bail Out
  }

  console.log('Searching for', keywords);

  state.requestInProgress = true;

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', //not to be confused with HTTP methods like GET/POST
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    page: state.nextPage++
  }).done(showImages).done(function (info) {
    console.log(info);
    if (info.photos.page >= info.photos.pages) {
      state.lastPageReached = true;
    }
    // state.requestInProgress = false; // let search to complete before flipping request
  });
};

const showImages = function(results) {
  _(results.photos.photo).each(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL, alt: photo.title}); // .attr('src', thumbnailURL)
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
    '_q.jpg' // change to something else for different sizes
  ].join('')
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // disable the form being submitted to the server

    $('#images').empty();
    state.nextPage = 1;
    state.lastPageReached = false;

    const searchTerms = $('#query').val();
    searchFlickr(searchTerms);
  });

  const chillSearchFlicker = _.debounce(searchFlickr, 3000, true);

  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height();
    console.log(scrollBottom);

    if (scrollBottom < 400) {
      const searchTerms = $('#query').val();

      chillSearchFlicker(searchTerms);
    }
  })
});

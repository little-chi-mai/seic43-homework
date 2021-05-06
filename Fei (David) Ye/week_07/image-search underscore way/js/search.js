// split complex problem into several functions

// Pagination
// Stopping at the last page
// Prevent excess requests

const state = {
    nextPage:1,
    lasPageReached:false
};

const searchFlickr = (keywords) => {
  if (state.lasPageReached) {
      return; // Bail out.
  }
  console.log("Searching for", keywords);

  const flickrURL = "https://api.flickr.com/services/rest?jsoncallback=?";
  // JSONP

  $.getJSON(flickrURL, {
    method: "flickr.photos.search", // not to be confused with HTTP methods like GET/POST
    api_key: "2f5ac274ecfac5a455f38745704ad084",
    text: keywords,
    format: "json",
    page: state.nextPage++
  })
    .done(showImages)
    .done(function (info) {
      console.log(info);
      if (info.photos.page >= info.photos.pages) {
          state.lastPageReached = true;
      }
    });
  // this getJSON is the info we send to flickr
  
};

const showImages = (results) => {
  _(results.photos.photo).each(function (photo) {
    // generate a URL from the photo object
    const thumbnailURL = generateURL(photo);
    // display the image at that URL
    const $img = $("<img>", { src: thumbnailURL, alt: photo.title });
    $img.appendTo("#images");
  });
};

const generateURL = (p) => {
  return [
    "http://farm",
    p.farm,
    ".static.flickr.com/",
    p.server,
    "/",
    p.id,
    "_",
    p.secret,
    "_q.jpg",
    // Change 'q' to something else for different sizes (see docs)
  ].join("");
};

$(document).ready(function () {
  $("#search").on("submit", function (event) {
    event.preventDefault(); // disable the form being submitted to the server

    $("#images").empty();
    state.nextPage = 1;
    state.lasPageReached = false;
    // get the search terms
    const searchTerms = $("#query").val();
    searchFlickr(searchTerms);
  });

  const chillSearchFlickr = _.debounce(searchFlickr, 4000, true);

  // very twitchy
  $(window).on("scroll", function () {
    // calculate the scroll bottom
    const scrollBottom =
      $(document).height() - $(window).scrollTop() - $(window).height();
    // console.log(scrollBottom);

    if (scrollBottom < 400) {
      const searchTerms = $("#query").val();
      chillSearchFlickr(searchTerms); 
    }
    // if scroll bottom < 200
    // searchFlickr again
  });
});

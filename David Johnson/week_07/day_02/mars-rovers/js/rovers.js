const fetchRover = function () {

  const rover = $('#search-term').val()
  console.log(rover);

  const manifestCall = $.ajax('https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?sol=1000&api_key=QWAZggAgfboHmSdAY4o5YVhi7kqkrMRtfW1Y84fv').done(function (manifest) {
  const manifestData = manifest.photo_manifest;
  console.log(manifestData);
  $('<p>').text(`Name: ${manifestData.name}`).appendTo('.manifest');
  $('<p>').text(`Status: ${manifestData.status}`).appendTo('.manifest');
  $('<p>').text(`Launch Date: ${manifestData.launch_date}`).appendTo('.manifest');
  $('<p>').text(`Landing Date: ${manifestData.landing_date}`).appendTo('.manifest');
  });

  $.ajax('https://api.nasa.gov/mars-photos/api/v1/rovers/'+rover+'/photos?sol=1000&api_key=QWAZggAgfboHmSdAY4o5YVhi7kqkrMRtfW1Y84fv').done(function (data) {
  const photo = data.photos[0].img_src
  $('#image').attr('src', photo);
  });


}

$('#search-button').on('click', fetchRover);

const fetchFact = function () {
  // Deferred syntax (which inspired the Promises syntax)

  $.ajax('http://api.open-notify.org/astros.json').done(function (data) {
    let number = `There are currently ${data['number']} humans in space. They are: `
    let message = `Message: ${data['message']}`
    $('<p>').text(number).appendTo('body');
    // $('<p>').text(message).appendTo('body');

    let people = data['people'].flat();
  //  console.log(people);
    let astronauts
      for (let i = 0; i <= people.length; i++) {
          let person = people[i]
          let name = person.name
          let craft = person.craft

          astronauts = `Name: ${name}, in craft: ${craft}`;
          $('<li>').text(astronauts).appendTo('body');
        }
    });
  };

$('#fetch').on('click', fetchFact);

// const fetchFact = function () {
//   $.ajax('http://api.open-notify.org/iss-now.json?').done(function(data) {
//     let lat = data['iss_position']['latitude'];
//     let lon = data['iss_position']['longitude'];
//
//     console.log(lat);
//     console.log(lon);
//     iss.setLatLng([lat, lon]);
//     isscirc.setLatLng([lat, lon]);
//     map.panTo([lat, lon], animate=true);
//   });
//     setTimeout(moveISS, 5000);
// };
//
// $('#fetch').on('click', fetchFact);
// fetchFact();

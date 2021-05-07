$(document).ready(function () {

    $('#reload').css('display', 'none')
    $('#list-div').css('display', 'none');

  const astronautsInSpace = function (event) {
    event.preventDefault();

    $.ajax('http://api.open-notify.org/astros.json').done(function (data) {
      const number = data.number;

      const people = data.people.forEach(function(i){
        if (i < i.length) {
        return;
        } else {
          (i + 1)
          let result = i.name
          const person = result;
          $('#list-item1').text(person)
        }
      })


      // const person2 = data.people[1].name;
      // $('#list-item2').text(person2)
      // const person3 = data.people[2].name;
      // $('#list-item3').text(person3)
      // const person4 = data.people[3].name;
      // $('#list-item4').text(person4)
      // const person5 = data.people[4].name;
      // $('#list-item5').text(person5)
      // const person6 = data.people[5].name;
      // $('#list-item6').text(person6)
      // const person7 = data.people[6].name;
      // $('#list-item7').text(person7)

      $('#changing-button').on('click', function (toList){
        $('#list-div').css('display', 'block');
        $('#reload').css('display', 'block')

        $('#reload').click(function() {
          location.reload();
        });
      });
      $('#number').text(number);
      $('#changing-button').text('Who?');
    });
  };
$('#changing-button').on('click', astronautsInSpace);
});

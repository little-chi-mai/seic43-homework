const fetchJoke = function (event) {
    event.preventDefault();
  
    const type = $('input[name="joke-type"]:checked').val();
    console.log(type);
    const url = `https://official-joke-api.appspot.com/jokes/programming/random`;
  
    if (type) {
      $.ajax(url).done(function(result) {
        const content = result[0].setup;
        $('#joke-content').html(`Set-up: ${content}`);
  
        const punchline = result[0].punchline
        $('#punchline').html(`Punchline: ${punchline}`);
      })
    }
  }
  
  $(document).ready(function () {
    $('#joke-form').on('submit', fetchJoke);
  });
  
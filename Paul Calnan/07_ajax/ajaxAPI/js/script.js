
const fetchJoke = function () {

  const query = document.getElementById('search').value;
  const joke = document.getElementById("joke");

  $.ajax( "https://v2.jokeapi.dev/joke/Any?type=single&contains=" + query).done(function (info) {
    if (info.error) {
      joke.innerHTML = `${"I can't think of anything funny to go with " + query + ", try again..."}`;
      return;
    } else {
      joke.innerHTML = `${info.joke}`;
    }
  })
};

document.getElementById('enter').addEventListener('click', fetchJoke)

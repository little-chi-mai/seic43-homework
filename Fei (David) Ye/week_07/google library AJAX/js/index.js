const fetchBook = () => {
//   document.getElementsByTagName("h1")[0].innerText =
//     "Welcome to Google Library";
//   document.getElementsByTagName("h1")[0].removeChild(img);
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return; // Not ready yet
    }

    // Convert the text from the API into a JS data structure
    if (document.getElementById("submitTxt").value) {
      const data = JSON.parse(xhr.responseText);
      const p = document.createElement("p");
      const img = document.createElement("img");
      img.setAttribute("src", data.items[0].volumeInfo.imageLinks.thumbnail);
      p.innerText = data.items[0].volumeInfo.title;
      document.getElementsByTagName("h1")[0].innerText = p.innerText;
      document.getElementsByTagName("h1")[0].appendChild(img);
    }
  };

  title = document.getElementById("submitTxt").value;
  xhr.open(
    "GET",
    `https://www.googleapis.com/books/v1/volumes?q=title:${title}`
  );
  xhr.send();

  //   data.items[0].volumeInfo.title
};

function newLocation() {
  window.location.href = "show.html";
}

document.getElementById("submitBtn").addEventListener("click", fetchBook);
// document.getElementById("submitBtn").addEventListener("click", newLocation);
fetchBook();

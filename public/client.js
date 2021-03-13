

// client-side js
// run by the browser each time your view template referencing it is loaded

console.log("hello world :o");

const dreams = [];

// define variables that reference elements on our page
const dreamsForm = document.forms[0];
// const dreamInput = dreamsForm.elements["dream"];
const dreamsList = document.getElementById("dreams");
const clearButton = document.querySelector('#clear-dreams');



  // a helper function that creates a list item for a given dream
const appendNewDream = dream => {
  const newListItem = document.createElement("li");
  newListItem.innerText = dream;
  dreamsList.appendChild(newListItem);
};

// a helper function that creates a list item for a given artist
const appendNewArtist = artist => {
  const newListItem = document.createElement("li");
  newListItem.innerText = artist;
  dreamsList.appendChild(newListItem);
};

// request the dreams from our app's sqlite database

// request the dreams from our app's sqlite database
// fetch("/sqlite3", {})
//   .then(res => res.send())
//   .then(response => {
//     response.forEach(row => {
//       console.log(row.Composer)
//     });
//   });

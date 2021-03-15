// client-side js
// run by the browser each time your view template referencing it is loaded


console.log("hello world :o");


const dreamsList = document.getElementById("dreams");

// request the dreams from our app's sqlite database
fetch("/test", {})
  .then(res => res.json())
  .then(response => {
    response.forEach(row => {
      appendNewDream(row.Composer);
    });
  });


  // a helper function that creates a list item for a given dream
const appendNewDream = dream => {
  const newListItem = document.createElement("li");
  newListItem.innerText = dream;
  dreamsList.appendChild(newListItem);
};
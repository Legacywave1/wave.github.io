const words = ["Welcome", "to", "the", "wave", "world"];
let index = 0;

function displayWord() {
  if (index < words.length) {
    document.getElementById('welcome-text').innerHTML += words[index] + " ";
    index++;
    setTimeout(displayWord, 1000); // Adjust the typing speed (in milliseconds) here
  } else {
    setTimeout(changeBackground, 2000); // Change the background after the typing is done
  }
}

function changeBackground() {
  document.querySelector('.stars').style.background = "url('data analytics.jpg')"; // Replace with the path to your data analysis image
  document.querySelector('.centered-text').innerHTML = "<h1>Page under maintenance</h1>";
  // You can add the machine learning image here as well
}

displayWord();

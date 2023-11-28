const words = ["Welcome", "to", "the", "wave", "world"];
let wordIndex = 0;
let charIndex = 0;

function displayWord() {
  if (wordIndex < words.length) {
    if (charIndex < words[wordIndex].length) {
      document.getElementById('welcome-text').innerHTML += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(displayWord, 100); // Adjust the typing speed (in milliseconds) here
    } else {
      document.getElementById('welcome-text').innerHTML += " ";
      wordIndex++;
      charIndex = 0;
      setTimeout(displayWord, 100); // Adjust the delay between words (in milliseconds) here
    }
  } else {
    setTimeout(changeBackground, 1000); // Change the background after the typing is done
  }
}

function changeBackground() {
  document.querySelector('.stars').style.animation = "none"; 
  document.querySelector('.stars').style.background = "url('machine learning.jpg')"; // Replace with the path to your static image
  document.querySelector('.centered-text').innerHTML = "<h1>Page under maintenance, we'd be back shortly</h1>";
  // You can add the machine learning image here as well
}

displayWord();

const words = ["Welcome", "to", "the", "wave", "world"];
let wordIndex = 0;
let charIndex = 0;
let text = '';

function type() {
  if (wordIndex < words.length) {
    if (charIndex < words[wordIndex].length) {
      text += words[wordIndex].charAt(charIndex);
      document.getElementById('welcome-text').innerHTML = text;
      charIndex++;
      setTimeout(type, 200); // Adjust the typing speed (in milliseconds) here
    } else {
      wordIndex++;
      charIndex = 0;
      text += ' ';
      document.getElementById('welcome-text').innerHTML = text;
      setTimeout(type, 500); // Adjust the delay between words (in milliseconds) here
    }
  }
}

type();

function changeBackground() {
  document.querySelector('.stars').style.animation = "none"; // Stop the animation
  document.querySelector('.stars').style.background = "url('data analytics.jpg')"; // Replace with the path to your static image
  document.querySelector('.centered-text').innerHTML = "<h1>Page under maintenance, we'd be back shortly</h1>";
  // You can add the machine learning image here as well
}

displayWord();


const words = ["Welcome", "to", "the", "wave", "world"];
let wordIndex = 0;
let charIndex = 0;

function displayWord() {
  if (wordIndex < words.length) {
    if (charIndex < words[wordIndex].length) {
      document.getElementById('welcome-text').innerHTML += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(displayWord, 100); 
    } else {
      document.getElementById('welcome-text').innerHTML += " ";
      wordIndex++;
      charIndex = 0;
      setTimeout(displayWord, 90);
    }
  } else {
    setTimeout(changeBackground, 1000);
  }
}

function changeBackground() {
  document.querySelector('.stars').style.animation = "none";
  document.querySelector('.stars').style.background = "url('data analytics.png')";
  document.querySelector('.centered-text').innerHTML = "<h1>Page under maintenance, we'd be back shortly</h1>";
  
}

displayWord();

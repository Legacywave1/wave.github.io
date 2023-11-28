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

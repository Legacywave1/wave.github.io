const words = ["Welcome", "to", "the", "wave", "world"];
let index = 0;

function displayWord() {
    if (index < words.length) {
        document.querySelector('.centered-text').innerHTML += "<h1>" + words[index] + "</h1>";
        index++;
        setTimeout(displayWord, 1000); // Change the delay (in milliseconds) here if you want the words to appear faster or slower
    }
}

displayWord();

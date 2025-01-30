const quote = document.getElementById("quote")
const author = document.getElementById("author")
const refresh = document.getElementById("refresh")
const savedQuotes = [
    {text: "One does want a hint of a color.", author: "Albert Goldman"},
    {text: "I do not wear shoes. They make me fall down.", author: "Agador Sparticus"},
    {text: "How 'bout those dolphins!", author: "Armand Goldman"},
    {text: "'You look tired' means 'you look old.' And 'you look rested' means 'you've had collagen.'", author: "Albert Goldman"},
    {text: "Oh God, I pierced the toast!", author: "Albert Goldman"},
    {text: "Men smear!", author: "Armand Goldman"},
    {text: "It's like riding a psychotic horse toward a burning stable.", author: "Armand Goldman"}]

function getRandomQuote() {
    const randomPick = Math.floor(Math.random()*savedQuotes.length)
    return savedQuotes[randomPick]
}

let randomQuote = getRandomQuote();
quote.textContent = randomQuote.text;
author.textContent = `- ${randomQuote.author}`;

refresh.addEventListener("click", function() {
    randomQuote = getRandomQuote();
    quote.textContent = randomQuote.text;
    author.textContent = `- ${randomQuote.author}`;
})
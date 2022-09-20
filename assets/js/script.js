var startBtn = document.querySelector('.start-button')
var wordsBlanksEl = document.querySelector('.word-blanks') 

// var for array of words
var words = ["javascript", "variable", "function", "object", "python", "localstorage", "timeout", "interval"]
var word
// score variable
// time left variable

// reset the word-blanks, an _ for each letter of the new word
function renderCharacters() {
    // var to hold a new string
    var str = ""
    for (var i = 0; i < word.length; i++) {
        //  if we have guessed the character that we are currently on
            // add the character into str
        // else
            // add an _ into str
            str += "_ "
            console.log(str)
    }
    // set textContent of wordBlanksEl to be str
    wordsBlanksEl.textContent = str.trim()
}

function startRound() {
    // get random word from words array
    var randomIndex = Math.floor(Math.random() * words.length)
    word = words[randomIndex]
    renderCharacters()

}
//addEventListener to start button (click)
startBtn.addEventListener('click', startRound)
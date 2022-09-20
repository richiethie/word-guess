var startBtn = document.querySelector('.start-button')
var wordsBlanksEl = document.querySelector('.word-blanks') 

var validChars = "abcdefghijklmnopqrstuvwxyz"
// var for array of words
var words = ["javascript", "variable", "function", "object", "python", "localstorage", "timeout", "interval"]
var word
var guessedCharacters = []
// score variable
// time left variable

//function for when key is pressed
function handleKeyDown(event) {
    console.log(event.key)
    if (validChars.includes(event.key)) {
        // keep track of character that was guessed, var guessedCharacters = []
        // push key press into guessedCharacters array
        guessedCharacters.push(event.key)
        // re-render wordBlanks.textContent
        renderCharacters()
    }
}

// reset the word-blanks, an _ for each letter of the new word
function renderCharacters() {
    // var to hold a new string
    var str = ""
    for (var i = 0; i < word.length; i++) {
        var letter = word[i]
        //  if we have guessed the character that we are currently on
        if (guessedCharacters.includes(letter)) {
            // add the character into str
            str += letter + " "
        }
        else {
            // add an _ into str
            str += "_ "

        }
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

//addEventListener to detect typing in _
document.addEventListener('keydown', handleKeyDown) //function for when key is pressed
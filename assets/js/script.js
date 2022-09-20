var startBtn = document.querySelector('.start-button')
var wordsBlanksEl = document.querySelector('.word-blanks') 
var scoreEl = document.querySelector('.score')

var validChars = "abcdefghijklmnopqrstuvwxyz"
// var for array of words
var words = ["javascript", "variable", "function", "object", "python", "localstorage", "timeout", "interval"]
var word
var guessedCharacters = []
// score variable
var score = 0
// time left variable

//function to check if the typed word is correct to increase score
function checkWord() {
    // compare word and wordBlanksEl.textContent (2nd shows spaces between letters in console)
    var wordFromDOM = wordsBlanksEl.textContent.split(' ').join('')
    if (word === wordFromDOM) {
        score++
        scoreEl.textContent = score
        startRound()
    }
}

//function for when key is pressed
function handleKeyDown(event) {
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
    checkWord()
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
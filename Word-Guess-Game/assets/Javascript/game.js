
//GLOBAL VARIABLES
//=========================================================================================================
//Array for the words that will be used in the game

var words = ["tupac",
    "biggie",
    "pagers",
    "walkman",
    "nsync",
    "gushers",
    "furbies",
    "frutopia"];

//Array of the selectatable alphabet letters that will be used for the game
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Underscore array to match letters array
var underScore_ = [];
//right word array below
var rightWord = [];
//wrong word array below
var wrongWord = [];
//Number of guesses left
var guessesLeft = 9;

var line = "_";
//Array to select a random word
var randWord = Math.floor(Math.random() * words.length);
//chooses a random word and outputs it
var chosenWord = words[randWord];
//DOM Manipulation= making underscores pop up on screen
var underScoreGen = document.getElementsByClassName("wordBlank");
//console.log(underScoreGen[0].innerHTML)

var underscoreGen2 = document.getElementById('wordBlank2').innerHTML
console.log(underscoreGen2)

var docRightGuess = document.getElementsByClassName("rightGuess")[0];
var docWrongGuess = document.getElementsByClassName("wrongGuess");



//MAIN 
//=========================================================================================================

//Function 
//=========================================================================================================
// function startGame(){
//     //picks a random word
//     randWord = words[math.floor(math.random()*words.length)];

//     for (var x = 0; x < randWord.length; x++)
    
// }
//underscores based on the length of the word

function generateunderscore() {
    for (var i = 0; i < chosenWord.length; i++) {
        
        underScore_.push("_");
        
    }
    return underScore_;
    
}
console.log(chosenWord);
console.log(generateunderscore());


console.log(underScoreGen)
alert(underScoreGen)
underScoreGen[0].innerHTML = "something"






//Get user guess
document.addEventListener("keypress", function guess() {
    var keyword = String.fromCharCode(event.keyCode);
    //If users guess is right, 
    if (chosenWord.indexOf(keyword) > -1) {
        //if guess right then we add to the right word array below is the code to do this
        rightWord.push(keyword);
        
        //replace underscore with right leter
        //alphabet should be chosenWord
        underScore_[chosenWord.indexOf(keyword)] = keyword;
        underScoreGen[0].appendChild("_");
        
        docRightGuess[0].innerHTML = rightWord;
        // Checks to see if user word mathces guesses
        if (underScore_.join('') == chosenWord) {
            underScoreGen[0].innerHTML = underScore_.join('');
            alert("You Win!!");
        } else {
            //if guess wrong then we add to the wrong word array below is the code to do this
            wrongWord.push(keyword);
            docWrongGuess[0].innerHTML = wrongWord;
        }
    }

    wrongWord.push(keyword);
    docWrongGuess[0].innerHTML = wrongWord;
    

});

    underScore_[0].innerHTML = generateunderscore().join(' ');
generateunderscore();


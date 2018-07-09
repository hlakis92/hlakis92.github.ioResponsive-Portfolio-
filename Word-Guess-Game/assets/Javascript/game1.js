
/*
//GLOBAL VARIABLES
//=========================================================================================================
//Array for the words that will be used in the game

var words = ["tupac",
    "biggie",
    "fresh prince of bel air",
    "fruitopia Vending Machines",
    "floppy disks",
    "ouch bubble gum",
    "bubble jug",
    "game boy",
    "pagers",
    "tomagotchi eggs",
    "walkman",
    "imac g three",
    "milky pens",
    "backstreet boys",
    "nsync",
    "time capsules",
    "koolaid jammers",
    "gushers",
    "furbies",
    "rainbow haired gremlins",
    "captian planet"]

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var loses = 0;
var wrongLetter = [];
var guessesLeft = 9;
var underScores = [];
var userGuesses = [];
var randWord;
var winCounter = 0;



//functions
//=========================================================================================================
function startGame(){
    //When game starts this code will generate a random word from our "words" array
    randWord = words[Math.floor(Math.random() * words.length)];
    //This loop is for the random words
    for (var i = 0; i < randWord.length; i++);{
        underScores.push('_');}
    //When we start the game we want it to reset each time, the code below will reset 
    wrongLetter = [];
    guessesLeft = 9;
    //Prints the underscores of the letters on the page/screen
    document.getElementsByClassName('wordBlank').innerHTML = underScores.join(" ");
    //Print on the screen
    document.getElementById('guessesLeft').innerHTML = guessesLeft;
    console.log(randWord);
}

//User Guesses
document.onkeyup = function (event) {
    userGuesses = event.key;
    //code below checks to see if the guess exists in a word
    if (randWord.indexOf(userGuesses) > -1) {
        for (var n = 0; n < randWord.length; n++) {
            if (userGuesses === randWord[n]) {
                underScores[n] = userGuesses;
                console.log(underScores);
                winCounter++;
            }
        }
    }
    else {
        wrongLetter.push(userGuesses);
        guessesLeft--;
        console.log(wrongLetter);
        console.log(guessesLeft);
        winLose();}
}


//Main
//=========================================================================================================
startGame();
console.log(randWord[0]);
*/

var words = ["tupac",
    "biggie",
    "pagers",
    "walkman",
    "nsync",
    "gushers",
    "furbies",
    "frutopia"];

     
    var word = words[Math.floor(Math.random()*words.length)];
    //split will split a string on some character 
    var wordLetters = word.split(''); 
    console.log(wordLetters);
    var answerArray = [];
    function startGame(){

   
    for(var i = 0; i <word.length; i++){
        answerArray[i] = "_";
        alert(answerArray.join(" "));
    }
    var remainingLetters = word.length;

    while(remainingLetters > 0){
        var guess = prompt("Guess a letter, or click cancel to stop playing.");
        if (guess === null){
            break;
        }else if (guess.length !== 1){
            alert("please enter a single letter");
        }else {
            for (var j = 0; j < word.length; j++){
                if(word[j] === guess){
                    answerArray[j] = guess;
                    remainingLetters--;
                }
            }
        }
    }
    alert(answerArray.join(" "));
    alert("Good Job! The answer was " + word);
}
startGame();
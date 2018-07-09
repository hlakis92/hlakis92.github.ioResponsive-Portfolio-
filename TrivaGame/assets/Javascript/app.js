
//Variables to the game for questions guessed right and wrong
var right = 0;
var wrong = 0;
var unMarked = 0;
var IntervalID;
var clock = 90;

//Hide Submit button upon before the fame starts
function hideSubmit() {
    $("#submit").hide();
}
hideSubmit();

function showSubmit() {
    $("#submit").show();
}

//Array object of questions
var gameQuestions = [{

    question: "1.) Who wrote the hit rap song titled Ebonics?",
    choices: {
        a: "Tupac", b: "Biggie", c: "Ice Cube", d: "Big L"
    },

    correctAnswer: "d"

}, {

    question: "2.) Who represented the west side in the rap fued between the east and the west during the 90's?",
    choices: {
        a: "Biggie", b: "Tupac", c: "Nas", d: "Jay Z"
    },

    correctAnswer: "b"

}, {

    question: "3.) Which one of these were not a 90's hit song?",
    choices: {
        a: "Jay Z,Hard Knock Life", b: "Wu-Tang Clan, CREAM", c: "Nas, The World is Yours", d: "Aliyah, Try Again"
    },

    correctAnswer: "d"

}, {

    question: "4.) Which one of these artists went by the name Shrimp Daddy in the 90s?",
    choices: {
        a: "Busta Rhymes", b: "Nas", c: "Jay Z", d: "Lil Wayne"
    },

    correctAnswer: "d"

}, {

    question: "5.) Which one of these artists signed the black eyed peas?",
    choices: {
        a: "Jay Z", b: "Tupac", c: "Eazy-E", d: "Eminem"
    },
    correctAnswer: "c"


}, {

    question: "6.) How long did it take Jay Z to write the Blueprint?",
    choices: {
        a: "1 week", b: "1 month", c: "2 days", d: "12 hours"
    },

    correctAnswer: "c"


}, {

    question: "7.) What was the name of Snoop Dogg, Nate Dogg, and Warren G's group?",
    choices: {
        a: "Dog Pound", b: "Brick House", c: "The Pound", d: "213"
    },

    correctAnswer: "d"


},{

    question: "8.) Which one of these artists were on the set of the video shoot for Dr. Dre and Tupac's California Love?",
    choices: {
        a: "Lil Wayne", b: "Kendrick Lamar", c: "Drake", d: "Kanye West"
    },

    correctAnswer: "b"


},{

    question: "9.) What did Rick Ross do in the 90s?",
    choices: {
        a: "Public Housing Associate", b: "Correctional Officer", c: "Business Development", d: "Stock Trading"
    },

    correctAnswer: "b"


},{

    question: "10.) Who Co-Wrote Will Smith's hit single 'Gettin Jiggy Wit It'?",
    choices: {
        a: "Nas", b: "Tupac", c: "Beyonce", d: "Lil Kim"
    },

    correctAnswer: "a"


}];

$(document).ready(function () {





    //Display questions after the start button is clicked and start timer
    $("#start").click(function startGame() {
        startTimer();
        displayQuestions();
        $("#start").fadeOut("slow");
    });

    //Timer for the quiz starts
    function startTimer() {
        IntervalID = setInterval(decrement, 1000);
    }
    function decrement() {
        clock--;
        $("#time").html("<h2>" + clock + "</h2>");
        if (clock <= 0) {
            clearInterval(IntervalID);
            checkAnswers();

        }

    }

});



//User can click radio button for the questions
function displayQuestions() {

    for (var q = 0; q < gameQuestions.length; q++) {
        var words = $("<p>");
        words.html(gameQuestions[q].question); //This creates the words for each of the questions in the gameQuestions object

        var fieldSet = $('<fieldset id=' + q + '>');
        words.append(fieldSet);

        for (var letters in gameQuestions[q].choices) {
            fieldSet.append('<input type="radio" name=' + q + ' value="' + letters + '">' + gameQuestions[q].choices[letters] + " ");//This loop sets each question on the page

        }
        words.append("</fieldSet>");
        $("#questions").append(words);
    }

    showSubmit();

}


//After the time  has run out show wrong and right answers 
function checkAnswers() {
    for (var i = 0; i < gameQuestions.length; i++) {
        var selected_value = $('input[name=' + i + ']:checked').val();

        if (selected_value === gameQuestions[i].correctAnswer) {
            right++;

        }
        else if (selected_value === undefined) {
            wrong++;
            unMarked++;
        }

        else if (selected_value !== gameQuestions[i].correctAnswer) {
            wrong++;
            console.log(wrong);
        }

        else {
            console.log("else");
        }

    }
    if (clock == 0) {
        console.log("Sorry, Game Over!!");
        gameOver();
    }
    console.log("answers checked, " + clock);
}




// Functions to hide game questions after the game is over/when submit button clicked
$("#submit").click(function () {

    checkAnswers();
    clearInterval(IntervalID);
    $("#questions").hide();
    $("#timer").hide();
    $("#rightGuess").html("Right Answers:" + right);
    $("#wrongGuess").html("Wrong Answers:" + wrong);
    $("#unmark").html("Unmarked Answers:" + unMarked);
    hideSubmit();
});

function gameOver() {
    clearInterval(IntervalID);
    $("#questions").hide();
    $("#timer").hide();
    $("#rightGuess").html("Right Answers:" + right);
    $("#wrongGuess").html("Wrong Answers:" + wrong);
    $("#unmark").html("Unmarked Answers:" + unMarked);
    hideSubmit();
}



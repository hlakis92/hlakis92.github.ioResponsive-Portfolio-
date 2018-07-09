$(document).ready(function () {
    //Diamaonds random number
  

    //Wins and losses Variables
    var count;
    var wins = 0;
    var losses = 0;

    //Random Generated number for the user to guess
    var guessNumber;

    //Calling the reset game up here and putting the 
    //other funtions in the reset game to keep code clean
    resetGame();
    gamePlay();
    


   
    // Appending random number to assign to each diamond in the html doc
    // The > means the img is a direct descendant of crystals
    function resetGame(){
        count = 0;

        gamePlay();
        guessNumber = (Math.floor(Math.random() * 101 + 19));
         $("#random").html(guessNumber);
         console.log(guessNumber);

         $(".crystals img").each(function() {
            diamondRandom = Math.floor(Math.random() * 11 + 1);
            $(this).attr("cNumber", diamondRandom);
        });

        $("#score").html(count);
    }



    // This function will grab the images with the gem class, 
    //and store the value of what is clicked, plus the count into the score <p>
    //parseInt turns a string of a number into a number instead of concatenating them
        $(".crystals img").on("click", function () {
            count += parseInt($(this).attr("cNumber"));
            $("#score").html(count);
            gamePlay();
        })
     
//This function below is to accumulate the wins and losses after is,
// resetGame in here to reset the game after a win or lose
           function gamePlay(){
           if(count === guessNumber){
               alert("You got it!!");
               wins++;
               resetGame();

           } else if (count > guessNumber){
               alert("sorry, no smoke!! Your number was " + count + "!");
               losses++;
               resetGame();
           }
        }
    });

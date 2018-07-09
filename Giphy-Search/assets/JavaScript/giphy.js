
  //Initial Array of movies that superheroes are in
  var gifs = ["Mouse"];

  //displayGifInfo function renders the HTML to display content
  $("button").on("click", function () {
    displaygifsInfo();
  });
    function displaygifsInfo() {
      
      var person = $(this).attr("data-person");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            //variable to create a div for each gif made
            var gifDiv = $("<div class='item'>");
            //variable to create ratings per gif generated 
            var rating = results[i].rating;
            //Variable to make p tags for rating of gif
            var p = $("<p>").text("Rating: " + rating);
            //variable for creating the image tag for each gif
            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);
            personImage.attr("data-animate", results[i].images.fixed_height.url);
            personImage.attr("data-state", "still");
            personImage.attr("data-still", results[i].images.fixed_height_still.url);
            personImage.attr("class", "gif");

            //Add gif before p tag
            gifDiv.prepend(p);
            gifDiv.prepend(personImage);
            
            $("#gifs-appear-here").prepend(gifDiv);
            
          }
        });
    }
    

    
    

    // Function for displaying movie data
function renderButtons() {
console.log("RenderFunction")
  // Deletes the movies prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Loops through the array of movies
  for (var i = 0; i < gifs.length; i++) {

      // Then dynamicaly generates buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adds a class of movie to our button
      a.addClass("movie");
      // Added a data-attribute
      a.attr("data-name", gifs[i]);
      // Provided the initial button text
      a.text(gifs[i]);
      // Added the button to the buttons-view div
      $("#buttons-view").append(a);
  }
}

// This function handles events where the add movie button is clicked
$("#add-movie").on("click", function (event) {
  event.preventDefault();
  // This line of code will grab the input from the textbox
  var movie = $("#movie-input").val().trim();

  // The movie from the textbox is then added to our array
  gifs.push(movie);

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();

});

// Adding click event listeners to all elements with a class of "movie"
$(document).on("click", ".movie", displaygifsInfo);

// Calling the renderButtons function to display the intial buttons
renderButtons();
$(document).on("click", ".gif", function () {
  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
  var state = $(this).attr("data-state");
  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
  // Then, set the image's data-state to animate
  // Else set src to the data-still value
  if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
  } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
  }
});

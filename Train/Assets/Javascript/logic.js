//API key from firebase
var config = {
    apiKey: "AIzaSyD1Rnya8P7R4hAzNpLcJuHL2qdxfF3E9us",
    authDomain: "train-schedule-times.firebaseapp.com",
    databaseURL: "https://train-schedule-times.firebaseio.com",
    projectId: "train-schedule-times",
    storageBucket: "train-schedule-times.appspot.com",
    messagingSenderId: "172922767659"
  };
  firebase.initializeApp(config);



// Create a variable to reference the database.
var database = firebase.database();

// /userRef references a specific location in our database (all connections stored in this directory)
var userRef = database.ref("/trainData");

// Variables for each area that will be appended into a table
var name = "";
var destination = "";
var time = 0000;
var frequency = 00;

// --------------------------------------------------------------

//This will be my click function for when a user clicks the submit button it will add the values entered
$("#submit-train").on("click", function() {
    //prevents the page from reloading when submit buttons are clicked
    event.preventDefault();
  
  var trainName = $("#train-name").val().trim();
  var trainDestination = $("#destination").val().trim();
  var trainTime = moment($("#train-time").val().trim(), "HH:mm").format();
  var trainFreq = parseInt($("#frequency").val().trim());

  // Creates local "temporary" object for holding employee data
  var newTrain = {
  	name: trainName,
  	destination: trainDestination,
  	time: trainTime,
  	frequency: trainFreq
  }

// Save the new train in Firebase
    database.ref("/trainData").push(newTrain);

  // Alerts this when the submit button is clicked and the values are appended to the table above in HTML
  alert("Train successfully added");

  // Clears all of the text that the user inputs info into
  $("#train-name").val("");
  $("#destination").val("");
  $("#train-time").val("");
  $("#frequency").val("");

  // Prevents moving to new page
  return false;

}); //end of submit-train event

//Create Firebase event for adding train to the database and a row in the html when a user adds an entry
database.ref("/trainData").on("child_added", function(childSnapshot, prevChildKey) {

	// Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainTime = childSnapshot.val().time;
  var trainFreq = childSnapshot.val().frequency;


  // First Train Time (pushed back 1 year to make sure it comes before current time)
    var trainTimeConverted = moment(trainTime, "HH:mm").subtract(1, "years");

  // Current Time
    var currentTime = moment();

    // Difference between the times
    var diffTime = moment().diff(moment(trainTimeConverted), "minutes");

    // Time apart (remainder)
    var trnRemainder = diffTime % trainFreq;

    // Minute Until Train
    var trnMinutesTill = trainFreq - trnRemainder;

    // Next Train
    var nextTrain = moment().add(trnMinutesTill, "minutes");


  // Add each train's data into the table
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
  trainFreq + "</td><td>" + moment(nextTrain).format("HH:mm") + "</td><td>" + trnMinutesTill + 
  "</td><td>" + "" + "</td></tr>");
});


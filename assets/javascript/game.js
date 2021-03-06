// intialize variables

// define targetNumber/counter so that when they are set within a function, they still have a global scope
var targetNumber;
var counter;
// initialize wins/losses to zero
var wins = 0;
var losses = 0;

// Now for the hard part. Creating multiple crystals each with their own unique number value.

// We begin by expanding our array to include four options.
var numberOptions = [10, 5, 3, 7];

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");

  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("crystal-image");

  // Each imageCrystal will be given a src link to the crystal image
  imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $("#crystals").append(imageCrystal);
}

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function() {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.

  counter += crystalValue;
  // update score 
  $("#yourScore").text(counter);
  // All of the same game win-lose logic applies. So the rest remains unchanged.
  // alert("New score: " + counter);

  if (counter === targetNumber) {
    alert("You win!");
    // increment wins
    wins += 1;
    //restart game
    startGame();
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
    // increment losses
    losses += 1;
    //restart game
    startGame();
  }

});




// define all things we want to happen when the game restarts
function startGame(){
  // find new random number
  targetNumber = Math.floor(20 + (Math.random() * 60));
  // update number to guess on screen
  $("#number-to-guess").text(targetNumber);

  // reset counter
  counter = 0;
  // update counter on screen
  $("#yourScore").text(counter);

  // update wins on screen
  $("#wins").text(wins);

  // update losses on screen
  $("#losses").text(losses);
}

startGame();
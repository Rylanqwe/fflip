// Create a variable to store the outcome of the coin flip (heads or tails)
let outcome;

// Create a function to generate a random number between 0 and 1
function flipCoin() {
  outcome = Math.random() < 0.5 ? "heads" : "tails";
  return outcome;
}

// Create a function to animate the coin flip
function animateFlip() {
  // Add code to animate the coin flip here
  // e.g. you can use CSS transitions to rotate the coin
}

// Create a function to display the outcome of the coin flip
function displayOutcome() {
  // Add code to display the outcome of the coin flip here
  // e.g. you can use the outcome variable and update the text on the page
}

// Create a button for the user to initiate the coin flip
const flipButton = document.querySelector("#flip-button");

// Add an event listener to the button to execute the coin flip animation and display the outcome
flipButton.addEventListener("click", function() {
  animateFlip();
  setTimeout(function(){
    flipCoin();
    displayOutcome();
  },1000);
});

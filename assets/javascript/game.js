var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var wins = 0;
var losses = 0;
var count = 9;
var userWin = document.getElementById("wins");
var userLoss = document.getElementById("losses");
var userAttempts = document.getElementById("remaining");
var userLetterInput = document.getElementById("guesses");
var resetLetters = document.getElementById("guesses");

//On Key Up Function
document.onkeyup = function(event) {
  var compLetter = letters[Math.floor(Math.random() * letters.length)];
  var userInput = event.key;

  // If else statements. If user letter = computer letter and count is greater than 0 increase wins and reset letters.
  if (userInput === compLetter && count > 0) {
    wins++;
    count = 9;
    var compLetter = letters[Math.floor(Math.random() * letters.length)];
    userLetterInput.append(userInput, ", ");
    userWin.textContent = "Wins: " + wins;
    userAttempts.textContent = "Guesses Left:" + count;
    resetLetters.textContent = "Your Guesses So Far: ";
  }
  //If user letter does not = computer letter and cont is greater than 0 decrease count by 1 until it reaches 0.
  else if (userInput !== compLetter && count > 1) {
    count = count - 1;
    userAttempts.textContent = "Guesses Left: " + count;
    userLetterInput.append(userInput, ", ");
  }
  // Once chances left = 0 user loses and loss count goes up by 1.
  else {
    losses++;
    count = 9;
    var compLetter = letters[Math.floor(Math.random() * letters.length)];
    userLoss.textContent = "Losses: " + losses;
    userAttempts.textContent = "Guesses Left: " + count;
    resetLetters.textContent = "Your Guesses So Far: ";
  }
};

//Global Variables
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var count = 9;
var userWin = document.getElementById("wins");
var userLoss = document.getElementById("losses");
var userLetterInput = document.getElementById("guesses");
var userAttempts = document.getElementById("remaining");

var resetLetters = document.getElementById("guesses");

//Game Logic Function

document.onkeyup = function (event) {
    var userInput = event.key;

    if ((userInput === compLetter) && (count < 0)) {
        wins++;
        count = 9;
        var compLetter = letters[Math.floor(Math.random() * letters.length)];
        userLetterInput.append(userInput, ", ");
        userWin.textContent = "Wins: " + wins;
        alert("You Win!");
            if (alert){
                document.location.reload();
            } 
    }
    else if ((userInput !== compLetter && count > 0)) {
        count = count - 1;
        userAttempts.textContent = "Guesses Left: " + count;
        userLetterInput.append(userInput, ", ");
    }

    else {
        losses++;
        count = 9;
        var compLetter = letters[Math.floor(Math.random() * letters.length)];
        userLoss.textContent = "Losses: " + losses;
        alert("You Lose, try again.");
            // if (alert){
            //     document.location.reload();
            // } 
        resetLetters.textContent= "Your Guesses So Far: "
    }


}

//loss counter should increase once the player looses and the game should reset.
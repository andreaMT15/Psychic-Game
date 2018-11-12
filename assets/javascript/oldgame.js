var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var count = 9;
var userWin = document.getElementById("wins");
var userLoss = document.getElementById("losses");
var userAttempts = document.getElementById("remaining");
var userLetterInput = document.getElementById("guesses");
var resetLetters = document.getElementById("guesses");

document.onkeyup = function (event) {
    var compLetter = letters[Math.floor(Math.random() * letters.length)];
    var userInput = event.key;
    console.log("guess letter: ", compLetter);
    console.log("user input: ", userInput);


    if ((userInput === compLetter) && (count>0)) {
        wins++;
        count = 9;
        var compLetter = letters[Math.floor(Math.random() * letters.length)];
        userLetterInput.append(userInput, " ");
        userWin.textContent = "Wins: " + wins;
        resetLetters.textContent= "Your Guesses So Far: ";
        
    }
    else if((userInput !== compLetter && count>0)){
        count = count-1;
        userAttempts.textContent = "Guesses Left: " + count;
        userLetterInput.append(userInput, " ");
    }

    else{
        losses++;
        count = 9;
        var compLetter = letters[Math.floor(Math.random() * letters.length)];
        userLoss.textContent = "Losses: " + losses;
        resetLetters.textContent= "Your Guesses So Far: "
        
    }

}
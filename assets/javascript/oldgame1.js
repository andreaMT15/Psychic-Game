var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var count = 9;
var userLetterInput = document.getElementById("guesses");

document.onkeyup = function (event) {
    var compLetter = letters[Math.floor(Math.random() * letters.length)];
    var userInput = event.key;
    // userLetterInput.append(userInput, " ");


    if ((userInput === compLetter) && (count>0)) {
        wins++;
        count === 9;
        var compLetter = letters[Math.floor(Math.random() * letters.length)];
        userLetterInput.append(userInput, " ");
        var userWin = document.getElementById("losses");
        userWin.textContent = "Wins: " + wins;
        console.log("guess letter: ", compLetter);
        console.log("user input: ", userLetterInput);
    }
    else if((userInput !== compLetter && count>0)){
        count = count-1;
        var userAttempts = document.getElementById("remaining");
        userAttempts.textContent = "Guesses Left: " + count;
        userLetterInput.append(userInput, " ");
    }

    else{
        losses++;
        count === 9;
        var compLetter = letters[Math.floor(Math.random() * letters.length)];
        // userLetterInput.append(userInput, " ");
        var userLoss = document.getElementById("losses");
        userLoss.textContent = "Losses: " + losses;
        
    }

}
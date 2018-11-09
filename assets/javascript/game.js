//create a variable with the letters that the user will guess
var win = 0;
var losses = 0;
var letterInput = document.getElementById("guesses");
var count = 0;
//Remember to add in all the letters of the alphabet once you are done testing
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//have user input the letter that they are guessing

document.onkeyup = function (event) {
    
    if (count < 5) {


        var compLetter = letters[Math.floor(Math.random() * 25)];
        var userInput = event.key;
        console.log("guess letter: ", compLetter);
        console.log("user input: ", userInput);
        if (userInput === compLetter) {
            alert("you win");
            win++;
            var winDiv = document.getElementById("wins");
            winDiv.textContent = "wins: " + win;
            letterInput.append(userInput, " ");
        }
        else {
            alert("you lose");
            losses++;
            alert(losses);
            var userLoss = document.getElementById("losses")
            userLoss.textContent = "losses: " + losses;
            letterInput.append(userInput, " ");
        }



    } else{
        alert("Game Over")
        count=0;
        wins=0
        losses=0
        userInput.empty();
        letterInput.empty();
        userLoss.empty();
    }
    count++;
}

// choose a letter randomly from the array using Math.random
//check if letter matches one of the letters in the array

//If it does, alert the user that they are correct and increase the score

//If it doesn't alert the user that they're wrong, increase the losses, and add a letter to the letters guessed

//Have user try again
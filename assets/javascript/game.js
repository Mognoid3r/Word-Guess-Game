
// variable lists:
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
var userInput = "";
var word = "";
var vocabularyList = ["Apple", "Banana", "Pamelo", "Pineapple", "Kiwi", "Tomato"]
var blanks = []
var randomInt = 0;
var remaining_guess = 10;
var wins = 0;

// Create variables that hold references to the places in the HTML where we want to display things.
var emptyLetterSpace = document.getElementById("empty-space");
var disgardedLetters = document.getElementById("letters-guessed");
var guessRemaining = document.getElementById("guess-remaining");
var wins = document.getElementById("wins-score");

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    //   // Determines which key was pressed.
    var userInput = event.key;
console.log("something here!")

    //   This function generates words randomly from the array vocabularyList

    function computerGeneratedWord(vocabularyList) {
        randomInt = Math.floor(Math.random() * vocabularyList.length);
        word = vocabularyList[randomInt];
    } 

    // This code will start the game, generate blank SVGPathSegClosePath, and reset the attempt count


    // Generates words randomly for game play based on the array of vocabularyList

    function unknownLetters() {
        for (var i = 0; i < word.length; i++) {
            blanks.push("_");
        } 
        emptyLetterSpace.textContent = blanks;
    }

    // This function compares the user input to the word program randomly generates

    function compareUserInputToWord() {
        for (var i = 0; i < word.length; i++) {
            if (word.charAt(i) === userInput) {
                // // console.log(word.charAt(i))
                // // blanks[i] = userInput;
                // wordBlanks.append(blanks);
                // wordBlanks.textContent = blanks;
                emptyLetterSpace.textContent = blanks.push(userInput);
            } 
            // blanks.push(emptyLetterSpace);

        }

    }

    function control() {
        if (compareUserInputToWord()) {
            
            disgardedLetters.textContent = userInput;
            guessRemaining.textContent = remaining_guess;
        }
        else {
            disgardedLetters.textContent = userInput;
            remaining_guess--;
            guessRemaining.textContent = remaining_guess;
        }

    }

    // function containLetters()
    // {
    //     for (var i = 0; i < vocabularyList.length; i++)
    //     {
    //         for (var j = 0; j < vocabularyList[i].length; j++)
    //         if(answer.containLetters )
    //     }
    // }

    computerGeneratedWord(vocabularyList);
    unknownLetters();
    control();

}




// var randomWord = vocabularyList[Math.floor(Math.random() * vocabularyList.length)];
// var randomLetter = 

// if (userInput != words) {
//     --attempts
// }
// else {

// }













// <!DOCTYPE html>
// <html lang="en-us">

// <head>
//   <meta charset="UTF-8">
//   <title>Rock Paper Scissors Part 7</title>
// </head>

// <body>

//   <div>
//     <p id="directions-text">Press r, p or s to start playing!</p>
//     <p id="userchoice-text"></p>
//     <p id="computerchoice-text"></p>
//     <p id="wins-text"></p>
//     <p id="losses-text"></p>
//     <p id="ties-text"></p>
//   </div>

//   <script type="text/javascript">
//     // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
//     var computerChoices = ["r", "p", "s"];

//     // Creating variables to hold the number of wins, losses, and ties. They start at 0.
//     var wins = 0;
//     var losses = 0;
//     var ties = 0;

//     // Create variables that hold references to the places in the HTML where we want to display things.
//     var directionsText = document.getElementById("directions-text");
//     var userChoiceText = document.getElementById("userchoice-text");
//     var computerChoiceText = document.getElementById("computerchoice-text");
//     var winsText = document.getElementById("wins-text");
//     var lossesText = document.getElementById("losses-text");
//     var tiesText = document.getElementById("ties-text");

//     // This function is run whenever the user presses a key.
//     document.onkeyup = function(event) {

//       // Determines which key was pressed.
//       var userGuess = event.key;

//       // Randomly chooses a choice from the options array. This is the Computer's guess.
//       var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//       // Reworked our code from last step to use "else if" instead of lots of if statements.

//       // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
//       if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

//         if ((userGuess === "r" && computerGuess === "s") ||
//           (userGuess === "s" && computerGuess === "p") || 
//           (userGuess === "p" && computerGuess === "r")) {
//           wins++;
//         } else if (userGuess === computerGuess) {
//           ties++;
//         } else {
//           losses++;
//         }

//         // Hide the directions
//         directionsText.textContent = "";

//         // Display the user and computer guesses, and wins/losses/ties.
//         userChoiceText.textContent = "You chose: " + userGuess;
//         computerChoiceText.textContent = "The computer chose: " + computerGuess;
//         winsText.textContent = "wins: " + wins;
//         lossesText.textContent = "losses: " + losses;
//         tiesText.textContent = "ties: " + ties;
//       }
//     };
//   </script>

// </body>

// </html>

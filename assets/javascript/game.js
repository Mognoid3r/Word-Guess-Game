
// variable lists:
var letter = 0;
var userGuessedWords = "";
var userInput = "";
var word = "";
var vocabularyList = ["Apple","Banana","Pamelo","Pineapple","Kiwi","Tomato"]
var wordToBeReveal = "";
var blanks = []
var randomInt = 0;

 // Create variables that hold references to the places in the HTML where we want to display things.
 var wordBlanks = document.getElementById("word-played");

 // This function is run whenever the user presses a key.
 document.onkeyup = function(event) {

    // Determines which key was pressed.
    userInput = event.key;
 }

// Generates words randomly for game play based on the array of vocabularyList

function unknownWords()
 {
     for (var i = 0; i < word.length; i++)
    {
        blanks.push("_");
    } document.getElementById("word-played");
 } 

function computerGeneratedWord (vocabularyList)
{
    randomInt = Math.floor(Math.random() * vocabularyList.length);
    word = vocabularyList[randomInt];
}

function compareUserInputToWord()
{
    for(var i = 0; i < word.length; i++)
    {
        if (word.charAt(i) === userInput)
        {
            score++
        }
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
unknownWords();
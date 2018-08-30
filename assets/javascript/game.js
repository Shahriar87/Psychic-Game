var userInput = document.getElementById("user-text");
// var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var computerChoices = "abcdefghijklmnopqrstuvwxyz".split('');
// console.log(computerChoices);

var guessesLeft = 9;
var wins = 0;
var losses = 0;
var listOfChoices = []
var computerGuess

function compGuess(){
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // console.log(computerGuess);
}

compGuess()

document.onkeyup = function psychic(event) {
    
    var userChoice = event.key;
    
    if (computerChoices.indexOf(userChoice) > -1){
        
        
        if (userChoice !== computerGuess){
            guessesLeft --
            listOfChoices.push(userChoice);

        } if (guessesLeft === 0){
            losses ++;
            guessesLeft = 9; 
            listOfChoices = [];
            compGuess();

        } if (userChoice === computerGuess){
            wins ++;
            guessesLeft = 9; 
            listOfChoices = [];
            compGuess();
        } 

        document.getElementById("win").textContent = wins;
        document.getElementById("loss").textContent = losses;
        document.getElementById("guess").textContent = guessesLeft;
        userInput.textContent = listOfChoices;

        

        // -- Some alternative trials --

        // userInput.textContent = new_array;

        // userInput.textContent = listOfChoices.concat(push(userChoice));

            // new_array= listOfChoices.concat(listOfChoices);

            // var new_array = listOfChoices.concat();

            //     for (var i = 1; i < listOfChoices.length; i++) {
            //         new_array[i] = new_array[i-1] + listOfChoices[i];
            //     }

    }




};

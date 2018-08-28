var userInput = document.getElementById("user-text");
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var guessesLeft = 9;
var wins = 0;
var losses = 0;
var listOfChoices = []

document.onkeyup = function psychic(event) {
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var userChoice = event.key;
    
    
    

    if (computerChoices.indexOf(userChoice) > -1){
        if (userChoice === computerGuess){
            wins ++;
            guessesLeft = 9; 
            listOfChoices = [];
        } if (userChoice !== computerGuess){
            guessesLeft --
            listOfChoices.push(userChoice);



            // userInput.textContent = listOfChoices.concat(push(userChoice));

            // new_array= listOfChoices.concat(listOfChoices);

            // var new_array = listOfChoices.concat();

            //     for (var i = 1; i < listOfChoices.length; i++) {
            //         new_array[i] = new_array[i-1] + listOfChoices[i];
            //     }


        } if (guessesLeft === 0){
            losses --;
            guessesLeft = 9; 
            listOfChoices = [];
        }

        document.getElementById("win").textContent = wins;
        document.getElementById("loss").textContent = losses;
        document.getElementById("guess").textContent = guessesLeft;
        userInput.textContent = listOfChoices;

        

        // userInput.textContent = new_array;

    }




};

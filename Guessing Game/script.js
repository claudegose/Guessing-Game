


let randomNumber = Math.floor(Math.random() * 15 + 1);


document.getElementById("submitguess").onclick = function() {


    var userChoice = document.getElementById("guessField").value;

    if (userChoice === randomNumber) {
        alert(`Awesome! You number ${userChoice} was correct. You can be named many things, hungry not being one of them.`);
    } else {
        alert(`Bummer... You guessed ${userChoice} and the secret number was ${randomNumber}.`)
    }
}
let computerGenerated = Math.floor(Math.random() * 15 + 1);

document.getElementById("btn").onclick = () => {
    let userGuess = document.getElementById("userNumber").value;

    if (computerGenerated == userGuess ){
        alert(`Awesome! You number ${userGuess} was correct. You can be named many things, hungry not being one of them.`);

    } else if(computerGenerated - userGuess === 1) {
        alert('Try a higher number')
    } else if ( userGuess - computerGenerated === 1){
        alert('Try a lower number')
    }
    else {
        alert(`Bummer... You guessed ${userGuess} and the secret number was ${computerGenerated}.`)
    }
}


/*

let computer = Math.floor(Math.random() * 15 + 1);

document.querySelector("#btn").onclick = () => {
    let user = document.querySelector("#userGuess").value;

    if (user == computer) {
        document.querySelector("#results").innerHTML = document.write = `Awesome! You number ${user} was correct. You can be named many things, hungry not being one of them.`;
    } else if (user < computer){
        alert("Try a higher number!")
    }   else if (user > computer) {
        alert("Try a lower number ")
    }
}


*/


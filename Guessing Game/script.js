
let x = Math.floor(Math.random() * 15 + 1);

document.getElementById("submitguess").onclick = function () {
    let y = document.getElementById("guessField").value;


    if ( x == y ){
        alert(`Congratulations! Your guess ${y} was correct`)
    } else {
        alert(`Sorry! You guessed ${y} and the correct number was ${x}! Try again`)
    }








}
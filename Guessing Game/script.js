


let randomNumber = Math.floor(Math.random() * 15 + 1);

   document.getElementById("submitguess").onclick = function () {
     let userNumber =  document.getElementById("guessField").value;

     if (randomNumber == userNumber){
         alert(`Congratulations, You picked ${userNumber}!`)
     } else {
         alert(`Sorry! You chose ${userNumber} and the correct number was ${randomNumber}. Try again!`);
     }

   }
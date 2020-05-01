
// create random number and set it to variable
let randomNumbers = Math.floor(Math.random() * 10);

// Create a function that allows the user to start game

function startGame(val) {
    console.log(val)
    let number = Number(prompt("Guess the secret number"));
    if(number === val) {
        alert("Awesome!!!! You got it right.")
    } else {
        alert("Game over!!! Try again")
    }
}

// call or execute the function to start game

startGame(randomNumbers)
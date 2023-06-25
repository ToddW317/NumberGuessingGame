let max = parseInt(prompt("Enter your maximum number."));
while (!max) { 
    max = parseInt(prompt("Enter an actual number!"));
}

const targetNum = Math.floor(Math.random() * max) + 1;
let attempts = 1;
console.log(targetNum);

let guess = prompt("Enter your first guess! At anytime, enter 'q' to quit.");

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("Too high! Guess again!");
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt("Too low! Guess again!");
        attempts++;
    } else {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit.")
    }
}
if (guess === 'q') {
    console.log("I always knew you were a quitter...")
} else {
    console.log("Nice work! You Win!");
    console.log(`It took you ${attempts} tries!`)
}


// create secret number
let secretNumber = 4;

// ask for guess
let stringGuess = prompt("Guess a number");
let guess = Number(stringGuess);

// check guess correctness
if (guess === secretNumber) {
  alert("That's right!");
}

// check for higher?
else if (guess > secretNumber) {
  alert("too high");
}

// check for lower
else {
  alert("too low");
}

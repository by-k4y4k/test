// SETCION 17
// COLOUR GAME PROJECT

// Game mechanics
let numOfSquares = 6;
let colours = generateRandomColours(numOfSquares);
let squares = document.querySelectorAll(".square");
let pickedColour;

// DOM Selections
let colourDisplay = document.getElementById("colour-display");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetBtn = document.querySelector("#reset");
let modeBtns = document.querySelectorAll(".mode");

init();

resetBtn.addEventListener("click", function() {
  reset();
});

function init() {
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpSquares() {
  for (let i = 0; i < squares.length; i++) {
    // assign click listeners to squares
    squares[i].addEventListener("click", function() {
      // get colour of clicked squares
      let clickedColour = this.style.backgroundColor;

      if (clickedColour === pickedColour) {
        messageDisplay.textContent = "Correct!"; // hooray!
        changeColours();
        resetBtn.textContent = "Play again?";
      } else {
        this.style.backgroundColor = "#232323"; // fade the square out
        messageDisplay.textContent = "try again"; // tell the user to try again
      }
    });
  }
}

function setUpModeButtons() {
  for (let i = 0; i < modeBtns.length; i++) {
    modeBtns[i].addEventListener("click", function() {
      // hardcoded... for now.
      modeBtns[0].classList.remove("selected");
      modeBtns[1].classList.remove("selected");
      // add the selected class to the button that was... selected
      this.classList.add("selected");
      // if the selected button reads 'easy', set the game to easy mode
      this.textContent === "easy" ? (numOfSquares = 3) : (numOfSquares = 6);

      reset(); // reset() actually changes what's onscreen
    });
  }
}

function changeColours() {
  // loop through all squares
  for (let i = 0; i < colours.length; i++) {
    // change colour to match corresponding colour from the generated array
    squares[i].style.backgroundColor = pickedColour;
  }
  // change the top section to match the winning / picked colour
  h1.style.backgroundColor = pickedColour;
}

function pickColour() {
  // pick a random number between 0 - highest array
  let random = Math.floor(Math.random() * colours.length);
  return colours[random];
}

function generateRandomColours(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColour()); // get random colours & push to array
  }
  return arr;
}

function randomColour() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")"; //rgb(r, g, b)
}

function reset() {
  messageDisplay.textContent = ""; //clear the messages
  colours = generateRandomColours(numOfSquares); // generate all new colours
  pickedColour = pickColour(); // pick a new colour to find

  // tell the player to find this new colour
  colourDisplay.textContent = pickedColour;

  for (let i = 0; i < squares.length; i++) {
    //if there is an colour unassigned to a square
    if (colours[i]) {
      squares[i].style.display = "block"; // show any hidden squares
      squares[i].style.backgroundColor = colours[i];
      // if all the colours have been assigned to squares
    } else {
      squares[i].style.display = "none"; //hide the extra sqaures
    }
  }
  // reset the top bg colour
  h1.style.backgroundColor = "steelblue";
  // make the reset button make more sense in context
  resetBtn.textContent = "New Colours";
}

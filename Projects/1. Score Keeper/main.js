let p1Button = document.getElementById("p1");
let p1Score = 0;
let p1Display = document.getElementById("p1Display");

let p2Button = document.getElementById("p2");
let p2Score = 0;
let p2Display = document.getElementById("p2Display");

let reset = document.getElementById("reset");
let input = document.querySelector("input");
let p = document.querySelector("#winning-score");

let isGameOver = false;
let winningScore = 5;

// need to state this here otherwise it's displayed as 0 when in 
// reality, winningScore is 5
p.textContent = winningScore;

p1Button.addEventListener("click", function() {
  if (!isGameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      console.log("game over");
      isGameOver = true;
      p1Display.classList.add("winner");
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function() {
  if (!isGameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      console.log("game over");
      isGameOver = true;
      p2Display.classList.add("winner");
    }
    p2Display.textContent = p2Score;
  }
});

reset.addEventListener("click", function() {
  resetScore();
});

function resetScore() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  isGameOver = false;
}

input.addEventListener("change", function() {
  winningScore = Number(this.value);
  p.textContent = winningScore;
  resetScore();
});

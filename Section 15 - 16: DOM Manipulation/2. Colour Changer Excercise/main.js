// SECTION 16 LECTURE 186
// COLOUR CHANGER

let but = document.querySelector("button");
let text = document.querySelectorAll("h1, p");
let isPurple = false;

but.addEventListener("click", function() {
  document.body.classList.toggle("purple");
  for (let i = 0; i < text.length; i++) {
    text[i].classList.toggle("white");
  }
});

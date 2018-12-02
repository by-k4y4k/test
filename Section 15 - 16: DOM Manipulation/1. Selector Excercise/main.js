// SECTION 15, LECTURE 178
// SELECTOR EXCERCISE

// Come up with 4 different ways to select the first p tag!

let a = document.getElementById("first");
let b = document.getElementsByClassName("special");
let c = document.querySelector("p");
let d = document.querySelector("p:first-of-type");

console.log(a);
console.log(b);
console.log(c);
console.log(d);

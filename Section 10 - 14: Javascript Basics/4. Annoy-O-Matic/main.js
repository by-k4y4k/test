// SECTION 11 LECTURE 135
// ANNOY-O-MATIC CODE ALONG

let answer = prompt("are we there yet?");

// indexOf is like ctrl-f for a string. It returns the index of where the
// specified word or character begins, or -1 if it cannot be found.
while (answer.indexOf("yes") === -1) {
  let answer = prompt("are we there yet?");
}

alert("YAY, WE MADE IT!!!");

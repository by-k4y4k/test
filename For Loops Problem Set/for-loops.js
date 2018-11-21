// SECTION 11 LECTURE 139
// FOR LOOPS PROBLEM SET

// Problem 1
console.log("Print all is between -10 and 19.");
for (i = -10; i <= 19; i++) {
  console.log(i);
}

// Problem 2
console.log("Print all even is between 10 and 40");
for (i = 10; i <= 40; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Problem 3
console.log("Print all odd is between 300 and 333");
for (i = 300; i <= 333; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

// Problem 4
console.log("Print all is divisible by 5 & 3 that are between 5 and 50");
for (i = 0; i <= 50; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(i);
  }
}

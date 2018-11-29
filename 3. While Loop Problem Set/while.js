// SECTION 11 LECTURE 133
// WHILE LOOPS PROBLEM SET

console.log("1. PRINT ALL NUMBERS BETWEEN -10 AND 19");
let number = -10;

while (number <= 19) {
  console.log(number);
  number++;
}

console.log("2. PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");
number = 10;
while (number < 40) {
  if (number % 2 === 0) {
    console.log(number);
  }
  number++;
}

console.log("3. PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");
number = 300;

// If this while condition is set to 333, the last result - 333 - is not
// returned, as number is no longer within this while's bounds.
while (number < 334) {
  if (number % 2 === 1) {
    console.log(number);
  }
  number++;
}

console.log("4. PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
number = 5;

while (number < 50) {
  if (number % 5 === 0 && number % 3 === 0) {
    console.log(number);
  }
  number++;
}

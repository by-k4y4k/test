// SECTION 12 LECTURE 147
// FUNCTIONS PROBLEM SET

// 1. isEven()
// Checks whether a number is even
function isEven(number) {
  if (typeof number !== "number") {
    console.log("I can't tell!");
    return "I can't tell!";
  }
  return number % 2 === 0;
}

// 2. factorial()
// Factorial 5 is 5 * 4 * 3 * 2 * 1
function factorial(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  return result;
}

// 3. kebabToSnake()
function kebabToSnake(kebab) {
  if (typeof kebab != "string") {
    return "this ain't even a kebab: " + kebab;
  }
  // regex, the best man at my eventual wedding to InDesign
  // this specific string searches for a literal '-' through the whole string
  let snake = kebab.replace(/-/g, "_");
  return snake;
}

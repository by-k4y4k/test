// SECTION 24 LECTURE 254
// AVERAGE GRADE

// Create a new function called average that takes an array of test scores (all
// of them numbers) and returns the average score in the array, rounded to the
// nearest whole number.

function average(arr) {
  // (re)set sum
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    // add all the scores together
    avg = avg + arr[i];
  }
  // first, divide the total by the number of recorded scores. Then round that.
  avg = Math.round(avg / arr.length);
  // finally, return the average
  return avg;
}

let scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); //should return 94

let scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); //should return 68

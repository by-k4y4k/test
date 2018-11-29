// SECTION 13 LECTURE 162
// ARRAYS PROBLEM SET

// 1. printReverse()
function printReverse(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    return arr[i];
  }
}

// 2. isUniform()
function isUniform(arr) {
  let first = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== first) {
      return false;
    }
  }
  return true;
}

// 3. sumArray()
function sumArray(array) {
  let result = 0;
  array.forEach(function(i) {
    result += i;
  });
  return result;
}

// 4. max()
function max(array) {
  let result = array[0];
  array.forEach(function(i) {
    if (i > result) {
      result = i;
    }
  });
  return result;
}

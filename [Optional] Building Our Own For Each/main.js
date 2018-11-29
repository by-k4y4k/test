// SECTION WHATEVER LECTURE SOMETHING
// OPTIONAL EXCERCISE - BUILDING OUR OWN FOREACH

let aw = [1, 2, 3, 4];
let friends = ["daveo", "dave", "david", "davus"];

function myForEach(arr, func) {
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    //call func for each item in array
    func(arr[i]);
  }
}

// ADDING A DEFINITION TO THE ARRAY PROTOTYPE
// which, considering we haven't covered this stuff yet, is pretty wild
Array.prototype.myForEach = function(func) {
  // loop through the array
  for (let i = 0; i < this.length; i++) {
    //call func for each item in array
    func(this[i]);
  }
};


// Using myForEach w/ an anonymous function
friends.myForEach(function(name) {
  console.log(name + " is my friend");
});

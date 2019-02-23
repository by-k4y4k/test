/*
 * SECTION 41 - JAVASCRIPT: THE TRICKY STUFF
 * Lecture 390 - 'New' keyword
 */

/*
 * Create a constructor function for a Dog - each dog should have a name and an
 * age. As a bonus, add a function for each dog called 'bark', which logs the
 * name of the dog + "just barked".
 */

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.bark = function() {
    console.log(this.name + ' just barked!');
  };
}

var rusty = new Dog('Rusty', 3);
var barkbark = new Dog('Barkbark', 999);

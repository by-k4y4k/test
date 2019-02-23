// SECTION 41 - JAVASCRIPT: THE TRICKY STUFF
// LECTURE 395 - EXCERCISE

// Create a consructor function for a Vehicle: every object created from this
// constructor should have a make, model and year property. Each object should
// also have a property called isRunning, which should be set to false.

function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}

// Every object created from the Vehicle constructor should have a function
// called turnOn, which changes the isRunning property to true, and a turnOff
// function which does the opposite.

Vehicle.prototype.turnOn = function() {
  this.isRunning = true;
};

Vehicle.prototype.turnOff = function() {
  this.isRunning = false;
};

// Every object created from the Vehicle constructor should have a method called
// honk, which returns the string "beep" if isRunning === true.

Vehicle.prototype.honk = function() {
  if (this.isRunning == true) {
    return 'beep';
  }
};

var mario = new Vehicle('Wiimote', 'Sideways', '2008');

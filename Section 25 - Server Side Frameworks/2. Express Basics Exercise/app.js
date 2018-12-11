// SECTION 25 LECTURE 265
// EXPRESS BASICS EXERCISE

let express = require("express");
let app = express();

app.get("/", function(req, res) {
  res.send("Welcome to my assignment :)");
});

app.get("/speak/:animal", function(req, res) {
  let sounds = {
    pig: "oink",
    cow: "moo",
    dog: "woof woof",
    cat: "leave, slave",
    squid: "woomy"
  };

  let animal = req.params.animal.toLowerCase();
  let sound = sounds[animal];
  res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:phrase/:number", function(req, res) {
  // extract phrase into var
  let phrase = req.params.phrase;

  // turn number into a Number
  let num = Number(req.params.number);

  let result = "";
  for (var i = 0; i < num; i++) {
    result += phrase + " ";
  }

  res.send(result);
});

app.get("*", function() {
  res.send("Sorry, page not found. What are you doing with your life?");
});

// Tell Express to listen for requests
app.listen(2122, "localhost", function() {
  console.log("listening on http://localhost:2122");
});

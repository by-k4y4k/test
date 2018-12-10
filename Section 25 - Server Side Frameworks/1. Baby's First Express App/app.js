var express = require("express");
var app = express();

// when GET "/"
app.get("/", function(req, res) {
  res.send("whats cookin");
});

app.get("/bye", function(req, res) {
  res.send("cya!");
});

app.get("/dog", function(req, res) {
  res.send(">:3 meow");
});

app.get("*", function(req, res) {
  res.send("ur a star");
});

// "/" => "hi there"
// "/bye" => "cya!"
// "/dog" => "meow"

// Tell Express to listen for requests
app.listen(2121, "localhost", function() {
  console.log("listening on http://localhost:2121");
});

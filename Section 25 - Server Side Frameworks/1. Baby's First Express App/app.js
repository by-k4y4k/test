var express = require("express");
var app = express();

// when GET "/"
// "/" => "hi there"
app.get("/", function(req, res) {
  res.send("whats cookin");
});

// "/bye" => "cya!"
app.get("/bye", function(req, res) {
  res.send("cya!");
});

// "/dog" => "meow"
app.get("/dog", function(req, res) {
  res.send(">:3 meow");
});

app.get("/r/:subredditName", function(req, res) {
  let subreddit = req.params.subredditName;
  // log parameters to terminal
  console.log(req.params);
  res.send("welcome to the '" + subreddit + "' subreddit");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
  // log parameters to terminal
  console.log(req.params);
  res.send("this is the comments page");
});

app.get("*", function(req, res) {
  res.send("ur a star");
});

// Tell Express to listen for requests
app.listen(2121, "localhost", function() {
  console.log("listening on http://localhost:2121");
});

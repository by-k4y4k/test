// SECTION 26 LECTURE 271
// POST REQUESTS

let express = require("express");
let app = express();
// body-parser allows for parsing of POST body
let bodyParser = require("body-parser");

// bodyparser can turn url-encoded POST bodies into JS objects.
// extended: true means that the value part of the object's
// key-value pair can be anything
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// this array will reset upon closing of the server.
let friends = ["Tony", "Miranda", "Lily", "woomy"];

app.get("/", function(req, res) {
  res.render("home");
});

// create post route at /addfriend
app.post("/addfriend", function(req, res) {
  let newFriend = req.body.newfriend;
  // push the data from the text input into the friends array
  friends.push(newFriend);
  // redirect the user back to the friends list instead of showing a
  // results page.
  res.redirect("/friends");
});

app.get("/friends", function(req, res) {
  res.render("friends", { friends: friends });
});

app.listen("1234", "localhost", function() {
  console.log("Listening on http://localhost:1234");
});

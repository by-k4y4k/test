// SECTION 26 LECTURE 268
// TEMPLATES AND EJS

// basic generic express setup...
let express = require("express");
let app = express();

// rendering a static template with no dynamism,
app.get("/", function(req, res) {
  //express automatically looks for .ejs files in the views/ dir
  res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res) {
  let thing = req.params.thing;
  // thingVar INSIDE love.ejs is equal to thing OUTSIDE love.ejs
  res.render("love.ejs", { thingVar: thing });
});

app.get("/posts", function(req, res) {
  // some dummy posts
  let posts = [
    { title: "post 1", author: "susy" },
    { title: "post 2", author: "susy 2000" },
    { title: "post 3", author: "susy, but better" }
  ];

  res.render("posts.ejs", { posts: posts });
});

// port 1234 because I'm a madman and I like to switch things up sometimes
app.listen(1234, function() {
  console.log("listening on http://localhost:1234");
});

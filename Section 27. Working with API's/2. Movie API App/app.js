// SECTION 27 LECTURE 278 - 281
// MOVIE API APP

var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("search");
});

app.get("/results", function(req, res) {
  var query = req.query.search;

  //string together the api request using the query from the search box
  var url = "http://omdbapi.com/?s=" + query + "&apikey=thewdb";

  // send the request
  request(url, function(e, response, body) {
    // if there were no errors and the HTTP response was 200 OK

    // parse the JSON response body into a JS object
    var data = JSON.parse(body);

    // if the "Response" is not "True" (omdb can't find what we're looking for)
    if (data["Response"] !== "True") {
      res.send(
        "Can't find a movie with that name in the database. <a href='/'> Try again? </a>"
      );
    } else {
      // send the value of the Title key as plaintext
      res.render("results", { data: data });
    }
  });
});

app.listen(1234, function() {
  // eslint-disable-next-line no-console
  console.log("Listening on http://localhost:1234");
});

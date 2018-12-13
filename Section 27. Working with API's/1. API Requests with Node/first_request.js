// request: an npm package that allows for requests (wow)
var request = require("request");

// this will log the HTML of the Google homepage
request("https://www.google.com", function(err, res, body) {
  // if there were no errors, and the HTTP response was 200 OK:
  if (!err && res.statusCode == 200) {
    // it's big, it's minified, but it is what we asked for, technically
    console.log(body);
  } else {
    console.log("Uh oh! Something went wrong");
    // what went wrong?
    console.log(err);
  }
});

// This uses the soon-to-be-defunct Yahoo Weather API to report what time the
// sun will set in Hawaii, in AEST
request(
  "https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  function(err, res, body) {
    // if there were no errors, and the HTTP response was 200 OK:
    if (!err && res.statusCode == 200) {
      // Bit of context
      console.log("Sunset in Hawaii tonight is at:");

      // parse the json into an object we can use
      var parsedData = JSON.parse(body);
      console.log(
        // drill down into all these layers of response object
        parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]
      );
    } else {
      console.log("Uh oh! Something went wrong");
      // what went wrong?
      console.log(err);
    }
  }
);

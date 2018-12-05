// SECTION 18 LECTURE 209-211
// COMMON JQUERY METHODS

// 1. text()
console.log($("h1").text());

// This appears in the console as a proper list (in FF anyway).
console.log($("ul").text());

// This returns a concatenated string of what's inside the <li>s
console.log($("li").text()); // Cadbury DreamFreddo FrogKitKat Dark Chocolate

// If you pass an argument to text(), it replaces.
$("h1").text("Wait a second...");

// This will replace the text inside all the <li>s.
$("li").text("This ain't Kansas");

// 2. html()
// Returns the HTML of whatever's selected
console.log($("ul").html());

// Sets the HTML
$("ul").html(
  "<li>I hacked your ul! </li> <li > Now I'll take over the world!</li>"
);

// 3. attr()

// Print the "src" attribute of the first image
console.log($("img").attr("src"));

// Tame the huge images somewhat
$("img").css("width", "400px");

// Change first image to the rolled-up pangolin
$("img:first-of-type").attr(
  "src",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/A_pangolin_in_defensive_posture%2C_Horniman_Museum%2C_London.jpg/1024px-A_pangolin_in_defensive_posture%2C_Horniman_Museum%2C_London.jpg"
);

// Change last image to the rolled-up pangolin
$("img")
  .last()
  .attr(
    "src",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/A_pangolin_in_defensive_posture%2C_Horniman_Museum%2C_London.jpg/1024px-A_pangolin_in_defensive_posture%2C_Horniman_Museum%2C_London.jpg"
  );

// 4. val()

// Change contents of text input
$("input").val("text input field is a-go go");

// Read and print the contents of the text input
console.log($("input").val());

// Clear the text input
$("input").val("");

// 5. add-, remove-, and toggleClass()
$("h1").addClass("correct");

$("h1").removeClass("correct");

$("li").addClass("wrong");

$("li")
  .removeClass("wrong")
  .addClass("correct");

$("li")
  .first()
  .toggleClass("done");

$("li").toggleClass("done");

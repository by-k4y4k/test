// SECTION 19 LECTURE 212
// jQUERY EVENTS

// 1. click()

$("h1").click(function() {
  console.log("h1 clicked");
});

$("button").click(function() {
  let text = $(this).text();
  console.log("button clicked... " + "it said " + text);
});

$("button").click(function() {
  $(this).css("backgroundColor", "pink");
});

// 2. keypress()

$("input[type='text']").keypress(function() {
  console.log("keypress fire");
});

$("input").keypress(function(e) {
  if (e.which === 13) {
    console.log("enter press");
  }
});

//3. on()

$("h1").on("click", function() {
  $(this).css("color", "purple");
});

$("input").on("keypress", function() {
  console.log("keypress");
});

$("button").on("mouseenter", function() {
  $(this).css("fontWeight", "bold");
});

$("button").on("mouseleave", function() {
  $(this).css("fontWeight", "normal");
});

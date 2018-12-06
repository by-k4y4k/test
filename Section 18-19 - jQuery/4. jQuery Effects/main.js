// SECTION 19 LECTURE 216
// jQUERY EFFECTS

/* The lecturer made examples of fadeIn, fadeOut, fadeToggle, slideDown, 
slideToggle and slideUp. What he did, however was change fadeToggle to whichever
method he was talking about. It's a little hard to show that here. */

// fadeIn / fadeOut / fadeToggle
$("button").on("click", function() {
  $("div").fadeToggle(1000, function() {
    // mandatory gloating
    console.log("take that, divs");
    $(this).remove(); // destroy
  });

  // if the log was put here, it wouldn't wait for the animation to finish
});

// SECTION 24 LECTURE 253
// NODE EXCERCISE

/* Write a function named echo that takes two arguments - a string and a number 
- and prints out the string number amount of times. */

function echo(str, num) {
  for (let i = 0; i < num; i++) {
    console.log(str);
  }
}

echo("Echo!!", 10); // should print "echo!!" 10 times
echo("Tater tots", 3); // should print "Tater tots" 3 times.

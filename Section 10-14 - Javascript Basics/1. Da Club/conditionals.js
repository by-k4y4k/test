function checkName() {
  age = document.getElementById("age").value;

  // Conditions of Entry into Da Club:
  // Persons under 18 cannot enter;
  // Persons under 21 cannot consume alcohol
  if (age < 18) {
    console.log("Sorry, you can't come in, because you are too young.");
  } else if (age < 21) {
    console.log("Come in, come in, but we can't let you drink.");
  } else if (age > 99) {
    console.log("This is no place for someone as old as you.");
  } else {
    console.log("Come in, have a good time!");
  }

  // CHALLENGE 1 - THROWING A SPECIAL ERROR IF THE AGE IS NEGATIVE
  if (age < 0) {
    console.log("So you're a negative amount of years old, eh? Get out.");
  }
  // CHALLENGE 2 - CHECKING TO SEE IF THE AGE IS AN ODD NUMBER.
  if (age % 2 != 0) {
    console.log("Your age is odd!");
  }

  // CHALLENGE 3 - CHECKING TO SEE IF CONGRATULATIONS ARE IN ORDER.
  if (age == 21) {
    console.log("Happy 21st! :)");
  }

  // CHALLENGE 4 - CHECKING FOR PERFECT SQUARES

  if (age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!");
  }
}

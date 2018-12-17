// SECTION 29 LECTURE 294 - 295
// INTRODUCTION TO MONGOOSE

/* eslint-disable no-console */

var mongoose = require("mongoose");

/* connect to the database hosted at localhost through the mongodb:// protocol.
If the cat_app database doesn't exist (which it likely won't the first time),
mongo will automatically create it for us. */
mongoose.connect("mongodb://localhost/cat_app");

// defining a(n initial) structure / schema for a cat object
var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

/* take the cat schema and compile it to a model, which returns an object that
has lots of methods (create, find, etc). It's conventional to have this
beginning with a capital letter. The name of the model - that is, the string
there - is the singular version of the collection name. If the 'cats' collection
doesn't exist inside the 'cat_app' db, it will be created. */
var Cat = mongoose.model("Cat", catSchema);

// ==========
// ADDING A CAT TO THE DB (1)
// ==========

/* Create a cat. The var name is george, but that doesn't matter to mongo, which
will parse the contents of the george var to see that the incoming cat's name is
(in this case) Mrs. Norris. 'george' only matters on the JS side of things.
Mongo knows that it's an object going into the cats collection because of the
'new Cat = ({})' line */
var george = new Cat({
  name: "Mrs. Norris",
  age: 11,
  temperament: "Evil"
});

/* Attempt to save the cat in the george var to the db. I say attempt because it
depends on all sorts of factors - internet connection, database readiness, that
kind of thing */
george.save(function(err, cat) {
  // e = error, cat = item that was saved
  if (err) {
    // if there was any sort of error:
    console.log("Something went wrong");
  } else {
    // if there were no errors:
    console.log("Saved a cat to the db:");
    console.log(cat);
  }
});

// ==========
// ADDING A CAT TO THE DB (2)
// ==========

// make new cat and save to db all in one step
Cat.create(
  {
    name: "Snow White",
    age: 15,
    temperament: "Bland"
  },
  function(err, cat) {
    if (err) {
      console.log(err);
    } else {
      console.log(cat);
    }
  }
);

// ==========
// RETRIEVAL OF ALL CATS FROM THE DB
// ==========

Cat.find({}, function(err, cats) {
  if (err) {
    // if there was an error:
    console.log("Something went wrong:");
    console.log(err);
  } else {
    // if find() had no errors:
    console.log("All the cats in the db:");
    console.log(cats);
    /* should output an array with all the data in the cats collection in the
     cat_app database. */
  }
});

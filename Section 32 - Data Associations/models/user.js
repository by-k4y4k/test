// We have to rerequire mongoose
const mongoose = require('mongoose');

/*
 * A user should have one name and one email, but can be associated with many
 * posts
 */
const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
});

// Module.exports is pretty much the return keyword for a file
module.exports = mongoose.model('user', userSchema);

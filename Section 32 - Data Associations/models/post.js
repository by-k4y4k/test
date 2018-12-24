const mongoose = require('mongoose');

/*
 * Anatomy of a post: it should contain a title and some content, both of which
 * are strings
 */
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

// Export the Post model
module.exports = mongoose.model('Post', postSchema);

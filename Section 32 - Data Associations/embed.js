// SECTION 32 LECTURE 313
// DATA ASSOCIATIONS - EMBEDDED DATA

const mongoose = require('mongoose');

// Connect to the mongo database
mongoose.connect(
  'mongodb://localhost/blog_demo',
  {useNewUrlParser: true}
);

/*
 * Anatomy of a post: it should contain a title and some content, both of which
 * are strings
 */
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

// Create the Post model
const Post = mongoose.model('Post', postSchema);

/*
 * A user should have one name and one email, but can be associated with many
 * posts
 */
const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema],
});

// Create the User model
const User = mongoose.model('User', userSchema);

const newUser = new User({
  email: 'user22@example.com',
  name: 'Johnn',
});

newUser.save(function(err, user) {
  if (err) {
    console.log(err);
  } else {
    console.log(user);
  }
});

newUser.posts.push({
  title: 'How to run',
  content: 'Walk, but do it more quickly.',
});

const newPost = new Post({
  title: 'Title',
  content: 'Footer Text',
});

newPost.save(function(err, user) {
  if (err) {
    console.log(err);
  } else {
    console.log(user);
  }
});

User.findOne({name: 'Johnn'}, function(err, user) {
  if (err) {
    console.log(err);
  } else {
    user.posts.push({
      title: 'How to sprint',
      content: 'Run, but do it more quickly',
    });

    user.save(function(err, user) {
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
    });
  }
});

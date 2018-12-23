/*
 * SECTION 32 LECTURE 315
 * DATA ASSOCIATIONS - OBJECT REFERENCES
 */

// eslint:
/* eslint-disable capitalized-comments */

const mongoose = require('mongoose');

// Connect to the mongo database
mongoose.connect(
  'mongodb://localhost/blog_demo_2',
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
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
});

// Create the User model
const User = mongoose.model('User', userSchema);

User.create({
  email: 'user@example.com',
  name: 'Usr',
});

Post.create(
  {
    title: 'How to Fly',
    content: 'Increase verticality for a long time',
  },
  function(err, post) {
    User.findOne({name: 'Usr'}, function(err, foundUser) {
      if (err) {
        console.log(err);
      } else {
        foundUser.posts.push(post);
        foundUser.save(function(err, data) {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
);

// exec is the go button
User.findOne({name: 'Usr'})
  .populate('posts')
  .exec(function(err, user) {
    if (err) {
      console.log(err);
    } else {
      console.log(user);
    }
  });

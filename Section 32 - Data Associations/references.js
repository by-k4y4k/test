/*
 * SECTION 32 LECTURE 316
 * DATA ASSOCIATIONS - MODULE.EXPORTS
 */

// eslint:
/* eslint-disable capitalized-comments */

const mongoose = require('mongoose');
// Connect to the mongo database
mongoose.connect(
  'mongodb://localhost/blog_demo_2',
  {useNewUrlParser: true}
);

// cleaning / modularising code
const Post = require('./models/post');
const User = require('./models/user');

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

// exec is pretty much the  go button
User.findOne({name: 'Usr'})
  .populate('posts')
  .exec(function(err, user) {
    if (err) {
      console.log(err);
    } else {
      console.log(user);
    }
  });

/*
 * SECTION 34 LECTURE 330 - 334
 * SECRET PAGE CODE ALONG
 */

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const User = require('./models/user');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// Learning a new template engine: pug.
app.set('view engine', 'pug');

// Look! You can inline a require statement! (It's wonky, don't like)
app.use(
  require('express-session')({
    secret: 'He does it, but has it been done too far?',
    // These next two lines are mandatory
    resave: false,
    saveUninitialized: false,
  })
);

// Initialise passport for the session defined above
app.use(passport.initialize());
app.use(passport.session());

// Create a new local strategy using the authenticate method coming from the plugin in the User model
passport.use(new LocalStrategy(User.authenticate()));

// This defines how express handles saving / encoding the session data
passport.serializeUser(User.serializeUser());
// ...As well as reading / unencoding the session data
passport.deserializeUser(User.deserializeUser());

// Connect to db after app init
mongoose.connect(
  'mongodb://localhost/secret',
  {useNewUrlParser: true}
);

// ROUTES

app.get('/', function(req, res) {
  res.render('home');
});

// Sign up form
app.get('/register', function(req, res) {
  res.render('register');
});

app.get('/secret', isLoggedIn, function(req, res) {
  res.render('secret');
});

// Handling form
app.post('/register', function(req, res) {
  User.register(
    // Create a new user with information from the form
    new User({username: req.body.username}),
    req.body.password,
    function(err, user) {
      if (err) {
        // If it didn't work, tell us about it...
        console.log(err);
        // ...And stop the whole thing, sending the user back to try again
        return res.render('register');
      }
      passport.authenticate('local')(req, res, function() {
        // Actually log the user in
        res.redirect('/secret');
      });
    }
  );
});

// Render the login form
app.get('/login', function(req, res) {
  res.render('login');
});

// Login logic
app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/secret',
    failureRedirect: '/login',
  }),
  function(req, res) {
    // we don't need express to do anything, it's all handled by passport
  }
);

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

// Check it: homemade middleware, fresh from the oven.
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

app.listen('1234', 'localhost', function() {
  console.log('listening on http://localhost:1234');
});

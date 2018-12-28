const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

/*
 * Adds methods from passportLocalMongoose onto the User object (used in
 * de/serialisation later)
 */
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);

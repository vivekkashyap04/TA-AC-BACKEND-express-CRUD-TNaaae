const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  age: Number,
  bio: String,
});

module.exports = mongoose.model('User', userSchema);
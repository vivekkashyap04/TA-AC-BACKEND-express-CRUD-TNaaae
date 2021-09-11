const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  name: String,
  email: String,
  password: { type: String, minlength: 6, maxlength: 15 },
});

module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true, minlength: 2, maxlength: 50 },
  lastName: { type: String, required: true, minlength: 2, maxlength: 50 },
  email: { type: String, required: true, minlength: 2, maxlength: 255, unique: true },
  username: { type: String, required: true, minlength: 2, maxlength: 50, unique: true },
  password: { type: String, required: true, minlength: 2, maxlength: 255 },
  createdDate: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

module.export = User;

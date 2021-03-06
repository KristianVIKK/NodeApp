const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, required: true, minlength: 2, maxlength: 50 },
  year: { type: Number, minlength: 4, maxlength: 4 },
  director: { type: String, minlength: 2, maxlength: 50 },
  image: { type: String, maxlength: 2048 },
  createdDate: { type: Date, default: Date.now },
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;

const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: Array, required: true },
  duration: { type: Number, required: true },
  genres: { type: Array, required: true },
  single: { type: Boolean, required: true },
  reproductions: { type: Number, required: true }
});

module.exports = mongoose.model('Song', SongSchema);

var mongoose = require('mongoose');

var PaintingSchema = new mongoose.Schema({
  name: String,
  artist: String,
  year: Number
});

module.exports = mongoose.model('Painting', PaintingSchema);

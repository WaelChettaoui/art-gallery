var mongoose = require('mongoose');

var PaintingSchema = new mongoose.Schema({
  name: String,
  artist: String,
<<<<<<< HEAD
  year: Number,
  paintingImg: String,
  cloudinary_id: String
=======
  year: Number
>>>>>>> 73f99a36f75c86a1a31f8e580776282557643932
});

module.exports = mongoose.model('Painting', PaintingSchema);

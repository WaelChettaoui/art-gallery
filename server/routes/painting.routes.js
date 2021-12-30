<<<<<<< HEAD
const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const Painting = require("../models/painting");


// CREATE A PAINTING
router.post("/", upload.single("paintingImg"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Create new painting
    let painting = new Painting({
      name: req.body.name,
      artist: req.body.artist,
      year: req.body.year,
      paintingImg: result.secure_url,
      cloudinary_id: result.public_id,
    });
    // Save painting
    await painting.save();
    res.json(painting);
  } catch (err) {
    console.log(err);
  }
});


// GET ALL PAINTINGS
router.get("/", async (req, res) => {
  try {
    let painting = await Painting.find();
    res.json(painting);
  } catch (err) {
    console.log(err);
  }
});


// DELETE PAINTING
router.delete("/:id", async (req, res) => {
  try {
    // Find painting by id
    let painting = await Painting.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(painting.cloudinary_id);
    // Delete painting from db
    await painting.remove();
    res.json(painting);
  } catch (err) {
    console.log(err);
  }
});


// UPDATE PAINTING
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    let painting = await Painting.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(painting.cloudinary_id);
    // Upload image to cloudinary
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path);
    }
    const data = {
      name: req.body.name || painting.name,
      avatar: result?.secure_url || painting.avatar,
      cloudinary_id: result?.public_id || painting.cloudinary_id,
    };
    painting = await Painting.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(painting);
  } catch (err) {
    console.log(err);
  }
});

// GET ONE PAINTING BY ID
router.get("/:id", async (req, res) => {
  try {
    // Find painting by id
    let painting = await Painting.findById(req.params.id);
    res.json(painting);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
=======
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Painting = require('../models/Painting.js');

/* GET ALL PAINTINGS */
router.get('/', function(req, res, next) {
  Painting.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE PAINTING BY ID */
router.get('/:id', function(req, res, next) {
  Painting.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE PAINTING */
router.post('/', function(req, res, next) {
  Painting.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE PAINTING */
router.put('/:id', function(req, res, next) {
  Painting.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE PAINTING */
router.delete('/:id', function(req, res, next) {
  Painting.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
>>>>>>> 73f99a36f75c86a1a31f8e580776282557643932

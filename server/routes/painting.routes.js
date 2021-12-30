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

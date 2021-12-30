var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
mongoose.connect('mongodb://localhost/mern-crud')
  .then(() =>  console.log('Connected to the DB'))
  .catch((err) => console.error(err));

var paintingRoute = require('./routes/painting.routes');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());
app.use('/api/v1/painting', paintingRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

const PORT = process.env.port;

app.listen( PORT || 4000, function(){
  console.log(`Now listening on port ${PORT}`);
})

module.exports = app;

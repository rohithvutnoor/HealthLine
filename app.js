var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/index');
var users = require('./routes/users');
var about = require('./routes/about');
var diseases = require('./routes/diseases');
var contact = require('./routes/contact');

var app = express();

app.locals.points = "12000";
app.locals.appHeadV = "hidden";
//var url = 'mongodb://localhost:27017/tempHealth';
//mongoose.connect(url,function (err, db) {
//  if(err){
//    console.log('Unable to Connect to Database Server',err);
//  }else {
//    console.log('Connection Established to Database Server');
//  }}
//  )
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
//app.use(express.bodyParser());
//app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




/*var url = 'mongodb://localhost:27017/tempHealth';
mongoose.connect(url,function (err, db) {
  if (err) {
    console.log('Unable to Connect to Database Server', err);
  } else {
    console.log('Connection Established to Database Server');
  }
});

var Schema = new mongoose.Schema({
  _id :String,
  name:String,
  age:Number
});
var user = mongoose.model('tempC', Schema);

app.post('/new', function (req, res) {
  new user({
    _id: req.body.email,
    name:req.body.name
}).save(function (err, doc) {
  if (err)res.json(err);
  else res.send('Successfully Inserted');
})
});*/
app.use('/', routes);
app.use('/users', users);
app.use('/about', about);
app.use('/diseases', diseases);
app.use('/contact', contact);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

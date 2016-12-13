var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoose = require('mongoose');
//var jsfiles = require('javascripts/diseases.js');
var tools = require('./../diseases');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {
    title: 'Rohith'
  });
});

//var url = 'mongodb://localhost:27017/tempHealth';
/*mongoose.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to Connect to Database Server', err);
  } else {
    console.log('Connection Established to Database Server');
  }
});*/
//var db = mongoose.createConnection(url, function (err, db) {
//  if (err) {
//    console.log('Unable to Connect to Database Server', err);
//  } else {
//    console.log('Connection Established to Database Server');
//  }
//});
/*var db = mongoose.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to Connect to Database Server', err);
  } else {
    console.log('Connection Established to Database Server');
  }
});*/
/*var query = {"name":"fever"};
 db.collection('diseases').find(query);
 console.log(db.collection('diseases').find(query));*/

//var Schema = new mongoose.Schema({
//  _id: String,
//  name: String,
//  age: Number
//});
//var user = mongoose.model('students',Schema);

//var query = {"name":"fever"};
//find data
/*user.find({"name":"rohithvutnoor"},function(err,docs){

  if(err) res.json(err);
  else{

  } console.log(docs);

});*/



//router.post('users/login',function(req,res) {
//  new user({
//    _id: req.body.email,
//    name: req.body.name
//  }).save(function (err, doc) {
//        if (err)
//          res.json(err);
//        //else res.send('Successfully Inserted');
//      })
//});

module.exports = router;

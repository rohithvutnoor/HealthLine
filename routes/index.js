var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var userName = "";
var profileData = new Array();
/* GET home page. */
var disease = "";
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Home',
      rDisease:disease,
      appHeadV:"hidden",
      currentUser:"",
      userData:""
  });
});


var url = 'mongodb://localhost:27017/tempHealth';

var db = mongoose.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to Connect to Database Server', err);
  } else {
    console.log('Connection Established to Database Server');
  }
});

  var Schema1 = new mongoose.Schema({
    //_id: String,
    name: String,
    phno: Number,
    city: String,
    effect: String,
    pcode: Number,
    pass: Number,
    email: String,
    consultancy : String,
    date: String
  });
/*  var Schema2 = new mongoose.Schema({
    _id: String,
    uname: String,
    city: String,
    phno: Number,
    email: String
  });*/
 var user = mongoose.model('tempcs',Schema1);
  //var appuser = mongoose.model('appointments',Schema2);

//var query = {"name":"fever"};

/*  user.find({"name":"ranjith"},function(err,docs){

    if(err) res.json(err);
    else{

    } console.log(docs);

  });*/
var disease = "";

router.post('/Registered',function(req,res) {

  var uname = req.body.name;
  var upass = req.body.pass;

  console.log(uname,upass);

  new user({
    name: req.body.name,
    pass: req.body.pass

  }).save(function (err, doc) {
        if (err)
          res.json(err);
        else res.render('index', {
            title: 'Home',
            rDisease:disease,
            appHeadV:'hidden',
            currentUser:"",
            userData:profileData
        });
      })

});
router.post('/LoggedIn',function(req,res) {
  var vname = req.body.name;
  var vpass = req.body.pass;
    userName="";

  console.log(vname,vpass);
appHeadV = "visible";

    var i=1;
    /*user.find({consult: "Raman"}, function (err, user1) {
        console.log(user1);
        profileData.push(user1[1].name);
        --i;
    });
    user.find({consult: "Raghav"}, function (err, user1) {
        console.log(user1);
        profileData.push(user1[1].name);
    --i;
    });
    user.find({consult: "Ravan"}, function (err, user1) {
        console.log(user1);
        profileData.push(user1[1].name);
    --i;
    });*/
    /*if(i==0) {*/
        /*user.find({name: vname}, function (err, user1) {
            console.log(user1);
            profileData.push(user1[1].email);
            profileData.push(user1[1].phno);
            profileData.push(user1[1].city);
            profileData.push(user1[1].pcode);

            profileData.push(user1[1].effect);
            profileData.push(user1[1].date);
            //profileData.push(user1[1].consultancy);
            //console.log(user[1].consultancy);
        });*/
    /*}*/
        /*console.log(profileData);*/

  user.findOne({name:vname,pass:vpass},function(err,user){
    if(err){
      console.log("error Login");
        var tempx = new Array();
        var tmp = "";
      return res.render('error', {
          title: 'Home',
          rDisease:disease,
          appHeadV:"hidden",
          currentUser:tmp,
          userData:tempx
      });
    }
    else {


      if (!user) {
        return res.status(404).send("Invalid");
      }
      else{
          userName = vname;
        return res.render('index', {
            title: 'Home',
            rDisease:disease,
            appHeadV:appHeadV,
            currentUser:userName,
            userData:profileData
        });
    }}
    });


});



router.post('/Appointed',function(req,res) {
    profileData="";
  new user({
    email: req.body.email,
    name: req.body.name,
    phno: req.body.phno,
    city: req.body.city,
    pcode: req.body.pcode,
    effect: req.body.effect,
    date:req.body.date,
    consultancy: req.body.consult

  }).save(function (err, doc) {

        if (err)
          res.json(err);
        else res.render('index', {
            title: 'Home',
            rDisease:disease,
            appHeadV:'hidden',
            currentUser:"",
            userData:profileData


        });
      })
});



var darray1 = ["Fever","Sweating","Shivering","Headache","MusclePain","Dehydration"];
var darray2 = ["Malaria","Headache","Vomiting","Diarrhea","MusclePain","Sweating"];
var darray3 = ["Typhoid","Headache","Diarrhea","Fever","MusclePain","Dehydration"];
var darray4 = ['Asthma','Cough','ChestPain','ShortBreath',"Sweating",'Pressure'];
var darray5 = ["Dengue","Fever","Headache","Vomiting","Dehydration","EyePain"];



/*
function symptomStatusCall() {
    setTimeout(symptomStatus(), 5000);
}
function symptomStatus() {

    var mydiv = document.getElementById("symptomCheck");
    mydiv.document.appendChild(document.createTextNode(disease));

}*/
//var xs = ["football","basketball"];
router.post('/symptoms',function(req,res) {


    var cbarray = req.body.symptom;
    //console.log(cbarray);


    function checkIn(cbarray,darray) {
        //console.log(darray);
        var stat=0;
        var i,j;
            for (i = 0; i < cbarray.length; i++) {
            for (j = 0; j < 6; j++) {
                if (cbarray[i] == darray[j]) {
                    //console.log(cbarray[i]+" "+darray[j]);
                    ++stat;
                }
            }
        }
        //console.log(".."+stat);
        return stat;
    }



    var x1 = checkIn(cbarray,darray1);
    var x2 = checkIn(cbarray,darray2);
    var x3 = checkIn(cbarray,darray3);
    var x4 = checkIn(cbarray,darray4);
    var x5 = checkIn(cbarray,darray5);
    //console.log(x1+" "+x2+" "+x3+" "+x4+" "+x5);
    function findMaxStat(a,b,c,d,e) {
        var arr = [a,b,c,d,e];
        //console.log(arr);
        var statss = 0;
        var max = arr[0];
        var i, j;
        for (i = 0; i < 5; i++) {
            if (max <= arr[i]) {
                max = arr[i];
                statss = i+1;
            }
        }
        //console.log(statss);
        //console.log(max);
        return statss;
    }
    var stats = findMaxStat(x1,x2,x3,x4,x5);


        if (stats == 1)
            disease = darray1[0];//mydiv.innerHTML = darray1[0];
        else if (stats == 2)
            disease = darray2[0];//mydiv.innerHTML = darray2[0];
        else if (stats == 3)
            disease = darray3[0];//mydiv.innerHTML = darray3[0];
        else if (stats == 4)
            disease = darray4[0];//mydiv.innerHTML = darray4[0];
        else
            disease = darray5[0];//mydiv.innerHTML = darray5[0];

    profileData="";
    console.log(disease);
    var d = "You Have "+disease+" Related Disease.";
    res.render('index', {
        title: 'Home',
        rDisease:d,
        appHeadV:'hidden',
        currentUser:userName,
        userData:profileData
    });
});



module.exports = router;

var express = require('express');
var router = express.Router();

var dt = "About Health Care";

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('about', {
        title: 'About Health Care'
    });
});

module.exports = router;
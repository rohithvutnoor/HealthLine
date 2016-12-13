/**
 * Created by rohithvutnoor on 30-Oct-16.
 */
var express = require('express');
var router = express.Router();
var diseasedata1  = require('../diseasedata.json');
var dt = "Disease Description";
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('diseases', {
        title: 'Diseases Description',
        diseasedata: diseasedata1,
        data:dt
    });
});
module.exports = router;
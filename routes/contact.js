/**
 * Created by rohithvutnoor on 30-Oct-16.
 */
/**
 * Created by rohithvutnoor on 30-Oct-16.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('contact', {
        title: 'CONTACT'
    });
});
module.exports = router;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("testing logs ..");
  res.render('index', { title: 'Express,here we are going to create an api and just check with slash users' });
});

module.exports = router;

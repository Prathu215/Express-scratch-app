var express = require('express');
const { users } = require('../model/data');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');//Previous one
  console.log(users);
  res.send(users);
});

module.exports = router;

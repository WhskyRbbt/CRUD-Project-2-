var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('will be the OAUTH landing page');
});

module.exports = router;

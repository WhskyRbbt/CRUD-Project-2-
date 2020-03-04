var express = require('express');
var router = express.Router();
const charCtrl = require('../controllers/index')

router.get('/', charCtrl.index);

module.exports = router;

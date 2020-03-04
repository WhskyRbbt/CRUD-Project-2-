var express = require('express');
var router = express.Router();
const charactersCtrl = require('../controllers/characters');


/* GET users listing. */
router.get('/', charactersCtrl.index);

router.get('/new', charactersCtrl.new);
router.post('/', charactersCtrl.create);



module.exports = router;

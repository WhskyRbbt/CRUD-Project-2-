var express = require('express');
var router = express.Router();
const charactersCtrl = require('../controllers/characters');


/* GET users listing. */
//router.get('/', charactersCtrl.index);
router.get('/characters/new', charactersCtrl.new);

router.get('/characters/view', charactersCtrl.viewChars)

router.post('/users/:id/characters', charactersCtrl.create);



module.exports = router;

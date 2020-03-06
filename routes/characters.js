var express = require('express');
var router = express.Router();
const charactersCtrl = require('../controllers/characters');


/* GET users listing. */
//router.get('/', charactersCtrl.index);
router.get('/characters/new', charactersCtrl.new);

router.get('/characters/view', charactersCtrl.viewChars)
router.get('/users/:id/characters/:id/edit', charactersCtrl.edit)
router.put('/users/:id/characters/:id', charactersCtrl.update)
router.post('/users/:id/characters', charactersCtrl.create);
router.delete('/users/:id/characters/:id', charactersCtrl.delete);



module.exports = router;

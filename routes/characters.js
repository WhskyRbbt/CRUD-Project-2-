var express = require('express');
var router = express.Router();
const charactersCtrl = require('../controllers/characters');


router.get('/characters/new',isLoggedIn, charactersCtrl.new);

router.get('/characters/view', charactersCtrl.viewChars)
router.get('/users/:id/characters/:id/edit',isLoggedIn, charactersCtrl.edit)
router.put('/users/:id/characters/:id', isLoggedIn, charactersCtrl.update)
router.post('/users/:id/characters', charactersCtrl.create);
router.delete('/users/:id/characters/:id', isLoggedIn, charactersCtrl.delete);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;

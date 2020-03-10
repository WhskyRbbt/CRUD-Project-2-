var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

router.get('/users/:id/characters/:id/skills/new',isLoggedIn, skillsCtrl.new);
router.post('/users/:id/characters/:id/skills',isLoggedIn, skillsCtrl.create);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;

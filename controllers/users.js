const User = require('../models/users');
const Character = require("../models/character");

module.exports = {
    index
};

function index(req, res) {
    Character.find({}, (err, character) => {
        res.render('users/index', {title: "Main Hub", character});
    })
}


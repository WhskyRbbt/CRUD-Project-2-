const User = require('../models/users');
const Character = require("../models/character");
const Skill = require("../models/skill");

module.exports = {
    index
};

function index(req, res) {
    Character.find({})
    .populate('skill')
    .exec( (err, characters) => {
        console.log(characters)
        res.render('users/index', {characters: characters, title: "Hello"})
    })
}


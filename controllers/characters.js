const Character = require('../models/character');


module.exports = {
    new: newChar,
    create,
    //index
};

// function index(req, res) {
//     Character.find({}, function(err, characters) {
//         res.render('characters/index', {title: 'Character List', characters});
//     });
// }

function newChar(req, res) {
    console.log("USER IS ", req.user)
    res.render('characters/new', {title: 'New Character', user: req.user});
}

function create(req, res) {
    console.log("this is " + req.user);
    let char = new Character(req.body);
    char.save((err, char) => {
        res.redirect('/users')
    })
        
    
};
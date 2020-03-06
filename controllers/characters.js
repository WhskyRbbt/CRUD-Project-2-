const Character = require('../models/character');


module.exports = {
    new: newChar,
    create,
    viewChars,
    edit
    // update
    //index
};

// function index(req, res) {
//     Character.find({}, function(err, characters) {
//         res.render('characters/index', {title: 'Character List', characters});
//     });
// }

function newChar(req, res) {
    // console.log("USER IS ", req.user)
    res.render('characters/new', {title: 'New Character', user: req.user});
}

function create(req, res) {
    console.log("REQ BODY ", req.body);
    req.body.user = req.user._id 
    let char = new Character(req.body);
    console.log(char)
    char.save((err, char) => {
        res.redirect('/users')
    })
        
};

function viewChars(req, res) {
    Character.find({user: req.user._id}, (err, chars) => {
        res.render('characters/view', {
            chars, 
            user: req.user,
            name: req.user.name,
            title: "View Characters"
        })
    })
}

    // function update(req,res) {
    //     console.log("this is to be upatded = " + req.body);
    // }
function edit(req,res) {
    Character.findById(req.params.id, (function (err, character) {
        res.render("characters/edit", {
            title: "edit character",
            user: req.user,
            name: character.name,
            gender: character.gender,
            race: character.race,
            focus: character.focus,
            role: character.role,
            id: character.id
        })

    }))
};
    function update(req, res) {
        console.log(req.body);
        // Character.findByIdAndUpdate()
    }
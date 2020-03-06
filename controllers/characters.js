const Character = require('../models/character');


module.exports = {
    new: newChar,
    create,
    viewChars,
    edit,
    update,
    delete: deleteChar
};

function newChar(req, res) {
    res.render('characters/new', {title: 'New Character', user: req.user});
}

function create(req, res) {
    console.log("REQ BODY ", req.body);
    req.body.user = req.user._id 
    let char = new Character(req.body);
    console.log(char)
    Promise.all([char.save()])
    .then(function() {
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
        let newChar = {
            name: req.body.name,
            gender: req.body.gender,
            race: req.body.race,
            focus: req.body.focus,
            role: req.body.role
        }
        Character.findByIdAndUpdate(req.params.id, newChar, {new: true}, function(err, character) {
            res.redirect('/users')
        })
        };

        function deleteChar(req, res) {
            Character.findByIdAndDelete(req.params.id, function(err) {
                res.redirect('/users')
            })
        }
        
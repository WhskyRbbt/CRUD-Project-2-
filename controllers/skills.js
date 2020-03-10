const Skill = require('../models/skill');
const Character = require('../models/character');


module.exports = {
    new: newSkill,
    create,

};

function newSkill(req, res) {
    // console.log(req.params)
    res.render('skills/new', {title: 'New Skill', user: req.user, charId: req.params.id});
}

function create(req, res) {
    let newSkill = {
        attack: req.body.attack,
        heal: req.body.heal,
        defense: req.body.defense,
        character: req.params.id
    }
    let skillBeingCreated = new Skill(newSkill);
    Promise.all([skillBeingCreated.save()])
    .then(function() {
        Character.findByIdAndUpdate(req.params.id, {skill: skillBeingCreated.id}, {new: true},  (err, character) => {
            res.redirect('/users')
        })
    })
    

};

const newCharacter = require('../models/charcter');

// module.exports = {
//     index, 
// };

// function index(req, res, next) {
//     res.render('users/index' , {
//       user: req.user
//     });
//   }

module.exports = {
    new: newCharacter,
    create,
    index
};

function index(req, res) {
    Character.find({}, function(err, characters) {
        res.render('characters/index', {title: 'Character List', characters});
    });
}

function newChar(req, res) {
    res.render('characters/new', {title: 'New Character'});
}

function create() {

}
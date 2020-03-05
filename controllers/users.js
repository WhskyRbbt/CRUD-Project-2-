const User = require('../models/users');


module.exports = {
    index
};

function index(req, res) {
    console.log("USER IS ", req.user)
    User.findById(req.user.id, function(err, user) {
        res.render('users/index', {title: "Dragon's Den"});
    });
}


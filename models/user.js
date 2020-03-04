const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charSchema = new mongoose.Schema({
    charName: String,
    email: String,
    avatar: String,
    googleId: String
}, {
    timestamps: true
});

const newCharSchema = new Schema({
    race: {
        type: String,
        enum: ['Human', 'Feline', 'Lizard'],
        require: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Non-specified' ],
        require: true
    },
    build: {
        type: String,
        enum: ['Warrior', 'Mage', 'Rogue'],
        required: true
    },
})

module.exports = mongoose.model('Character', charSchema)
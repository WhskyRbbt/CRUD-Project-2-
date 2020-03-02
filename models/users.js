const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newCharSchema = new Schema({
    race: {
        type: String,
        enum: ['Human', 'Feline', 'Lizard'],
        require: true
    },
    class: {
        type: String,
        enum: ['Warrior', 'Mage', 'Rogue'],
        required: true
    },
    skills: {
        type: String,
        enum: ['Damage Dealer', 'Healer', 'Crowd Control'],
        require: true
    },
})
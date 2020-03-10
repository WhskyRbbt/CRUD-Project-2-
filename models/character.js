const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const charSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        default: ""
    },
    race: {
        type: String,
        enum: ['Human', 'Pantherkin', 'Lizard-folk'],
        required: true,
        default: ""
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true,
        default: ""
    },
    focus: {
        type: String,
        enum: ['Warrior', 'Mage', 'Rogue'],
        required: true,
        default: ""
    },
    role: {
        type: String,
        enum: ['Damage-dealer', 'Healer', 'Crowd-control'],
        required: true,
        default: ""
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'}, 
    skill: {type: Schema.Types.ObjectId, ref: 'Skill'}, 
})

module.exports = mongoose.model('Character', charSchema)

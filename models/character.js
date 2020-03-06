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
        enum: ['male', 'female'],
        required: true,
        default: ""
    },
    focus: {
        type: String,
        enum: ['warrior', 'mage', 'rogue'],
        required: true,
        default: ""
    },
    role: {
        type: String,
        enum: ['damage-dealer', 'healer', 'crowd-control'],
        required: true,
        default: "damage-dealer"
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Character', charSchema)

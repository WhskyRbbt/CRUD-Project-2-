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
        enum: ['human', 'panther', 'lizard'],
        required: true,
        default: "human"
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true,
        default: "male"
    },
    focus: {
        type: String,
        enum: ['warrior', 'mage', 'rogue'],
        required: true,
        default: "warrior"
    },
    role: {
        type: String,
        enum: ['damage-dealer', 'healer', 'crowd-control'],
        required: true,
        default: "damage-dealer"
    },
    user:{type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('characters', charSchema)

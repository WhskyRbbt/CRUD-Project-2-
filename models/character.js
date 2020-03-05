const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const charSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    race: {
        type: String,
        enum: ['human', 'panther', 'lizard'],
        require: true
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        require: true
    },
    focus: {
        type: String,
        enum: ['warrior', 'mage', 'rogue'],
        required: true
    },
    user:{type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('characters', charSchema)

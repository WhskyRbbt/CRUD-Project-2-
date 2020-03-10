const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const skillSchema = new mongoose.Schema({
    attack: {
        type: String,
        enum: ['Swing', 'Cast', 'Arrow'],        
        required: true,
        default: ""
}, 
    heal: {
        type: String,
        enum: ['Heal', 'Raise', 'Shield'],
        required: true,
        default: ""
}, 
    defense: {
        type: String,
        enum: ['Parry', 'Reflect', 'Dodge'],
        required: true,
        default: ""
},    
    character: {type: Schema.Types.ObjectId, ref: 'Character'}

});



module.exports = mongoose.model('Skill', skillSchema)
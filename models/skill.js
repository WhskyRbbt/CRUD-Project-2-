const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const skillSchema = new mongoose.Schema({
    attack: {
        type: String,
        enum: ['swing', 'cast', 'arrow'],        
        required: true,
        default: ""
}, 
    heal: {
        type: String,
        enum: ['heal', 'raise', 'shield'],
        required: true,
        default: ""
}, 
    defense: {
        type: String,
        enum: ['parry', 'reflect', 'dodge'],
        required: true,
        default: ""
},    
    character: {type: Schema.Types.ObjectId, ref: 'Character'}

});



module.exports = mongoose.model('Skill', skillSchema)
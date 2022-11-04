const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
      Name: String,
     Balance:{
        type:Number,
        default:100
     },
    
     address: String,
     age:Number,
    gender: {
        type: String,
        enum: ["male", "female", "other"] 
     },
     isfreeAppUser: {
        type:Boolean,
        default:false
     }
    
}, { timestamps: true });

module.exports = mongoose.model('User2', userSchema) //users

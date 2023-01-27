const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type: 'string',
        required: true,
        trim: true,
        min: 3,
        max:20
    },
    lastName:{
        type: 'string',
        required: true,
        trim: true,
        min: 3,
        max:20
    },
    userName:{
        type: 'string',
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email:{
        type: 'string',
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    hash_password:{
        type: 'string',
        required: true

    },
    role:{
        type: 'string',
        enum: ['admin', 'user'],
        default: 'admin'
    },
    contactNumber:{
        type: 'string',
    },
    profilePicture:{
        type: 'string',
    }
});
module.exports = mongoose.model('User');
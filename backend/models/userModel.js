const mongoose = require('mongoose') ;
const crypto = require('crypto') ;
const bcrypt = require('bcryptjs') ;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is missing']
    },
    contact_no :{
        type: Number,
    },
    email :{
        type: String,
        required: [true, 'Email is missing']
    },
    password: {
        type: String,
        required: [true, 'Password is missing']
    },
    confirm_password: {
        type: String,
        required: [true, ' Confirm Password is missing']
    }
});

UserSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
});

UserSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
){
    return await bcrypt.compare(candidatePassword, userPassword) ;
} ;

const User = mongoose.model('User', UserSchema) ;
module.exports = User ;
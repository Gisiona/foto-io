const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email: String,
    nome:String
});

module.exports = mongoose.model('User', userSchema);
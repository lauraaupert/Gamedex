const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    //DEFINE USER HERE
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
//DO WE NEED BCRYPT HERE
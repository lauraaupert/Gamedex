const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Game = require("./Game");
// const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  email: String, 
  password: String,
  name: String,
  games: [
    {
      type: Schema.Types.ObjectId,
      ref: "Game",
    }
  ]
    //DEFINE USER HERE

});

// User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", User);
//DO WE NEED BCRYPT HERE

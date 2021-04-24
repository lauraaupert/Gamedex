const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Game = require("./Game");
// const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  email: String, 
  password: String,
  name: String,
  // games: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Game",
  //   }
  // ],
//OR 
  games: [
    {
  title: String,
//res.results[0].name
  platform: String,
//res.results[0].platforms[0].platform.name
//res.results[0].platforms[1].platform.name
  store: String,
//res.results[0].stores[0].store.name
//res.results[0].stores[1].store.name
  image: String,
//res.results[0].background_image
  date: { type: Date, default: Date.now }
    }
  ]
});


// });

// User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", User);
//DO WE NEED BCRYPT HERE

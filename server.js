const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

//PASSPORT REQUIRES
const passport = require("./config/passport");

const session = require("express-session")
const bcrypt = require("bcryptjs")
const cookieParser = require("cookie-parser")

const db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//PASSPORT MIDDLEWARE

app.use(session({
  secret: "secretelephant",
  resave: true,
  saveUnitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

// app.use(cookieParser("secretelephant"))



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);
require("./routes/api/user.js")(app);
require("./routes/api/games")(app, db);

//PASSPORT TEST ROUTES
// app.post("/login", (req,res) => {
//   console.log(req.body)
// })
// app.post("/register", (req,res) => {
//   console.log(req.body)

//       const newUser = new User({
//         username: req.body.username,
//         password: req.body.password
//       });
//       db.User
//   .find({})
//   .then(() => db.User.create(newUser))
//   .then(data => {

//     // console.log(data.result.n + " records inserted!");

//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });
// })

    

 

// Send every other request to the React app

// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/gamedex",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => console.log("DB connected!")
);


const userSeed = [
  {
    email: "The Dead Zone",

    password: "Stephen King",
    name: "Alpha"


  },
  {
    email: "Arthur the Frog",

    password: "tadpole",
    name: "beta",
    games: [
      {
      title: "Among us",
      platform: "Dead",
      store: "glubby",
      image: "https://media.rawg.io/media/games/e74/e74458058b35e01c1ae3feeb39a3f724.jpg"
      },
      {
        title: "yo",
        platform: "greeb",
        store: "gkghl",
        image: "https://media.rawg.io/media/games/e74/e74458058b35e01c1ae3feeb39a3f724.jpg",
      }
    
    ]
  }

]
// db.Game
//   .find({})
//   .then(() => db.Game.create(game))
//   .then(data => {

//     console.log(" records inserted!");

//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

db.User
  .find({})
  .then(() => db.User.create(userSeed))
  .then(data => {

    console.log(" records inserted!");

    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

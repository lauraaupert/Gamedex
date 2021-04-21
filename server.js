const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

//PASSPORT REQUIRES
const passport = require("./config/passport");

const passportLocal = require("passport-local").Strategy
const session = require("express-session")
const bcrypt = require("bcryptjs")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const User = require("./models/user")

const db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//PASSPORT MIDDLEWARE
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))

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
    username: "The Dead Zone",

    password: "Stephen King"
  },
  {
    username: "Arthur the Frog",

    password: "tadpole"
  }

]
db.User
  .find({})
  .then(() => db.User.create(userSeed))
  .then(data => {

    // console.log(data.result.n + " records inserted!");

    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

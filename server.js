const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
// Define middleware hereapp.use(express.urlencoded({ extended: true }));app.use(express.json());// Serve up static assets (usually on heroku)if (process.env.NODE_ENV === "production") {  app.use(express.static("client/build"));}
// Define API routes hererequire("./routes/api/user.js")(app);
// Connect to the Mongo DBmongoose.connect(  process.env.MONGODB_URI || "mongodb://localhost/gamedex",  {    useNewUrlParser: true,    useUnifiedTopology: true,    useCreateIndex: true,    useFindAndModify: false,  },  () => console.log("DB connected!"));
// Send every other request to the React app// Define any API routes before this runsapp.get("*", (req, res) => {  res.sendFile(path.join(__dirname, "./client/build/index.html"));});
app.listen(PORT, () => {  console.log(`:earth_americas: ==> API server now on port ${PORT}!`);});











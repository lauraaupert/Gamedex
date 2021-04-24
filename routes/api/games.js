const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

// // Matches with "/api/games"
// // router.route("/")
// //   .get(gamesController.findAll)
// //   .post(gamesController.create);

// // // Matches with "/api/games/:id"
// // router
// //   .route("/:id")
// //   .get(gamesController.findById)
// //   .put(gamesController.update)
// //   .delete(gamesController.remove);

// // module.exports = router;

const isAuthenticated = require("../../config/middleware/isAuthenticated");
const User = require("../../models/user")
const Game = require("../../models/game")

module.exports = (server, db) => {
//   /*      * Here are the basic api routes for games *
//             -GET /api/games -> used to grab all games
//             -GET /api/users -> used to get user info
//             -POST /api/users -> add user to db
//     */

  server.get("/api/users", isAuthenticated, (req, res) => {
    db.User.findAll({}).then(data => {
      res.json(data);
    });
  })

  server.put("/api/users", (req, res) => {

    let data = req.body;
    let userId = data.id;

    console.log(data)

    db.User.findOne({
        _id: userId
    }).then(async user => {
      user.games = data.userGames;
      await user.save();
      res.status(200).end();
    });
  });


//   //returns all games from db
  server.get("/api/games", isAuthenticated, (req, res) => {
//     //return res.json(["mario or something"]);
    db.Game.find({}).then((data) => {
      res.json(data);
    });
  });

};
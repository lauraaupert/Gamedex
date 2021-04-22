const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

// Matches with "/api/games"
// router.route("/")
//   .get(gamesController.findAll)
//   .post(gamesController.create);

// // Matches with "/api/games/:id"
// router
//   .route("/:id")
//   .get(gamesController.findById)
//   .put(gamesController.update)
//   .delete(gamesController.remove);

// module.exports = router;

const isAuthenticated = require("../../config/middleware/isAuthenticated");
const sequelize = require("sequelize");

module.exports = (server, db) => {
  /*      * Here are the basic api routes for games *
            -GET /api/games -> used to grab all games
            -GET /api/users -> used to get user info
            -POST /api/users -> add user to db
    */

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
      where: {
        id: userId
      }
    }).then(async user => {
      user.profileImage = data.img;
      user.games = data.userGames;
      user.platforms = data.userPlatforms;
      await user.save();
      res.status(200).end();
    });
  });


  //returns all games from db
  server.get("/api/games", isAuthenticated, (req, res) => {
    //return res.json(["mario or something"]);
    db.Games.findAll({}).then((data) => {
      res.json(data);
    });
  });

  //return all platforms
  server.get("/api/platforms", isAuthenticated, (req,res) => {
    db.Platform.findAll({}).then(data => {
      res.json(data);
    });
  });

    //return all avatars
    server.get("/api/avatars", isAuthenticated, (req,res) => {
      db.Avatar.findAll({}).then(data => {
        res.json(data);
      });
    });

  //returns all games by title
  server.get("/api/games/:title", isAuthenticated, (req, res) => {
    db.Games.findAll({
      where: {
        title: sequelize.where(
          sequelize.fn("LOWER", sequelize.col("title")),
          "LIKE",
          "%" + req.params.title + "%"
        ),
      }
    }).then((data) => {
      res.json(data);
    });
  });
};
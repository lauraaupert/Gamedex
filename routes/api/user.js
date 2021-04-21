// Requiring our models and passport as we've configured it
var db = require("../../models");
var passport = require("../../config/passport");
const URL = process.env.APP_URL || "http://localhost:3000"

module.exports = app => {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        res.json(req.user);
    });


    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", function (req, res) {
        db.User.create({
            email: req.body.email,
            password: req.body.password,
            userName: req.body.userName,
        })
            .then(user => {
                res.status(200).json(user);
            })
            .catch(function (err) {
                res.status(401).json(err);
            });
    });

    app.get("/auth/success", (req, res) => {
        console.log("The user object is ", req.user)
        if (req.user) {
                console.log("OBJECT!")
                res.json({
                    success: true,
                    message: "User has successfully authenticated",
                    user: {
                        id: req.user.id,
                        // onboard: req.user.onboard
                    },
                    cookies: req.cookies
                });
        } else {
            res.json({
                success: false,
                message: "No user authenticated"
            })
        }
    });

    app.get("/api/users/:id", (req, res) => {
        const id = req.params.id;
        db.User.findOne({ "_id" : id })
            .then(data => res.json(data))
    })

    app.put("/api/users/:id", (req, res) => {
        const id = req.params.id;
        db.User.update(
            // { onboard: true },
            { "_id" : id })
            .then(updated => res.json(updated))
    })

    // GET /auth/google
    //   Use passport.authenticate() as route middleware to authenticate the
    //   request.  The first step in Google authentication will involve redirecting
    //   the user to google.com.  After authorization, Google will redirect the user
    //   back to this application at /auth/google/callback
    // app.get('/auth/google',
    //     passport.authenticate('google', {
    //         scope: ['https://www.googleapis.com/auth/userinfo.email',
    //             'https://www.googleapis.com/auth/userinfo.profile'],
    //         display: 'popup'
    //     }))

    // GET /auth/google/callback
    //   Use passport.authenticate() as route middleware to authenticate the
    //   request.  If authentication fails, the user will be redirected back to the
    //   login page.  Otherwise, the primary route function function will be called,
    //   which, in this example, will redirect the user to the home page.
    // app.get('/auth/google/callback',
    //     passport.authenticate('google', { failureRedirect: '/auth/failure' }),
    //     function (req, res) {
    //         res.redirect(URL)
    //     })

    app.get('/auth/failure', function (req, res) {
        res.send(401)
    })

    // Route for logging user out
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect(URL);
    });

    // Route for getting some data about our user to be used client side
    app.get("/api/user_data/", function (req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });
}
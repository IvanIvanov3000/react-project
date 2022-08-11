const jwt = require('./jwt');
const { authCookieName } = require('../app-config');
const {
    userModel,
    movieModel
} = require('../models');

function auth(redirectUnauthenticated = true) {
    return function (req, res, next) {
        const token = req.headers[authCookieName];
        //console.log('token', token);
        if (!token) {
            return res.status(403).send("A token is required for authentication");
        }
        Promise.all([
            jwt.verifyToken(token),
        ])
            .then(([data, blacklistedToken]) => {
                if (blacklistedToken) {
                    return Promise.reject(new Error('blacklisted token'));
                }

                userModel.findById(data.id)
                    .then(user => {
                        req.user = user;
                        req.isLogged = true;
                        next();
                    })
            })
            .catch(err => {
                console.log(err);
                if (!redirectUnauthenticated) {
                    next();
                    return;
                }
                if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
                    console.error(err);
                    res
                        .status(401)
                        .send({ message: "Invalid token!" });
                    return;
                }
                next(err);
            });
    }
}
function isOwner() {

    return function (req, res, next) {
        const userId = req.user._id;
        const movieId = req.params.movieId;

        userModel.findById(userId)
            .then(user => {
                if (user.movies.includes(movieId)) {
                    next();
                }
                else {
                    console.error(err);
                    res
                        .status(401)
                        .send({ message: "You are not authorized to access this page" });
                    return;

                }
            })
    }
}
function isNotOwner() {

    return function (req, res, next) {
        const userId = req.user._id;
        const movieId = req.params.movieId;

        userModel.findById(userId)
            .then(user => {
                if (!user.movies.includes(movieId)) {
                    next();
                }
                else {
                    console.log
                    res
                        .status(401)
                        .send({ message: "You are not authorized to access this page" });
                    return;

                }
            })
            .catch(err => {
                console.log(err);
                res.send(err.message);

                next(err);
            })
    }
}
function isNotLiked() {
    return function (req, res, next) {
        const userId = req.user._id;
        const movieId = req.params.movieId;
        console.log("userID", userId);
        movieModel.findById(movieId)
            .then(movie => {
                console.log("movie likes", movie.likes);
                if (!movie.likes.includes(userId)) {

                    next();
                }
                else {
                    res
                        .status(401)
                        .send({ message: "You can't like the same post twice" });
                    return;

                }
            })
            .catch(err => {
                console.log(err);
                res.send(err.message);
                next(err);
            });
    }
}
function isLiked() {
    return function (req, res, next) {
        const userId = req.user._id;
        const movieId = req.params.movieId;

        movieModel.findById(movieId)
            .then(movie => {
                if (movie.likes.includes(userId)) {

                    next();
                }
                else {
                    res
                        .status(401)
                        .send({ message: "You can't dislike the same post twice" });
                    return;

                }
            })
            .catch(err => {
                console.log(err);
                next(err);
            });
    }
}
module.exports = {
    auth,
    isOwner,
    isNotOwner,
    isNotLiked,
    isLiked
};

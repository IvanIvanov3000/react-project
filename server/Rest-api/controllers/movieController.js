const { movieModel, userModel } = require('../models');

function getMovies(req, res, next) {
    movieModel.find({ isPublic: true })
        // .populate('userId')
        .then(Movies => res.json(Movies))
        .catch(next);
}
function getMovie(req, res, next) {
    const { movieId } = req.params;

    movieModel.findById(movieId)
        .populate("author")
        .then(Movie => res.json(Movie))
        .catch(next);
}
// function searchMovie(req, res, next) {
//     const { title, tag } = req.body;
//     const searchBy = {};
//     if (title.length > 0) {
//         searchBy.title = title
//     }
//     if (tag.length > 0) {
//         searchBy.tag = tag;
//     }
//     movieModel.find(searchBy)
//         .populate("author")
//         .then(Movie => res.json(Movie))
//         .catch(next);
// }
// function getLatestMovies(req, res, next) {
//     const limit = 4;

//     movieModel.find({ isPublic: true })
//         .sort({ created_at: -1 })
//         .limit(limit)
//         // .populate('userId')
//         .then(posts => {
//             res.status(200).json(posts)
//         })
//         .catch(next);
// }

function getMyMovies(req, res, next) {
    movieModel.find({ author: req.user._id })
        .populate('Movies')
        .then(Movies => res.json(Movies))
        .catch(next);
}

function createMovie(req, res, next) {
    const { title, tag, isPublic, image, description } = req.body;
    const _id = req.user._id;

    movieModel.create({ title, tag, isPublic, image, description, author: _id })
        .then(Movie => {
            console.log("created Movie----", Movie);
            userModel
                .findByIdAndUpdate({ _id }, { $addToSet: { movies: Movie._id } }, { new: true })
                .then(updatedUser => {
                    res.status(200).json(updatedUser)
                })
                .catch(err => {

                    console.log(err);
                })

            res.json(Movie)

        })
        .catch(next);
}

function likeMovie(req, res, next) {
    const movieId = req.params.movieId;
    const { _id } = req.user._id;

    movieModel.findByIdAndUpdate({ "_id": movieId }, { $addToSet: { likes: _id } }, { new: true })
        .then(updatedMovie => {
            res.status(200).json(updatedMovie)
        })
        .catch(next);
}
function dislikeMovie(req, res, next) {
    console.log("dislike---------");
    const movieId = req.params.movieId;
    const { _id } = req.user._id;

    movieModel.findByIdAndUpdate({ "_id": movieId }, { $pull: { likes: _id } }, { new: true })
        .then(updatedMovie => {
            console.log(updatedMovie, "successful dislike")
            res.status(200).json(updatedMovie)
        })
        .catch(next);
}

function editMovie(req, res, next) {
    const { movieId } = req.params;
    const { title, tag, isPublic, image, description } = req.body;
    console.log("edit", title, tag, isPublic, image, description);
    //const { _id: userId } = req.user;

    // if the userId is not the same as this one of the post, the post will not be updated
    movieModel.findOneAndUpdate({ _id: movieId }, { title, tag, isPublic, image, description }, { runValidators: true, new: true })
        .then(updatedPost => {
            if (updatedPost) {
                res.status(200).json(updatedPost);
            }
            else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);
}
function deleteMovie(req, res, next) {
    const { movieId } = req.params;
    const { _id: userId } = req.user;

    Promise.all([
        movieModel.findOneAndDelete({ _id: movieId }),
        userModel.findOneAndUpdate({ _id: userId }, { $pull: { Movies: movieId } }),

    ])
        .then(([deletedOne, _]) => {
            if (deletedOne) {
                res.status(200).json(deletedOne)
            } else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);
}

module.exports = {
    // getLatestMovies,
    // searchMovie,
    getMovies,
    getMovie,
    createMovie,
    likeMovie,
    dislikeMovie,
    getMyMovies,
    editMovie,
    deleteMovie,
}

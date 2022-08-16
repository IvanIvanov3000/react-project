const { blogModel, userModel } = require('../models');

function getComments(req, res, next) {
    blogModel.find()
        .populate("author")
        .then(comments => res.json(comments))
        .catch(next);
}
function getTopComments(req, res, next) {
    blogModel.find({ "rating": { $gte: 9 } })
        .sort({ 'rating': -1 })
        .limit(2)
        .populate('author')
        .then(comments => res.json(comments))
        .catch(next);
}

function getMyComments(req, res, next) {
    blogModel.find({ author: req.user._id })
        .populate('comments')
        .then(comments => res.json(comments))
        .catch(next);
}

function createComment(req, res, next) {
    const { text, rating } = req.body;
    const _id = req.user._id;

    blogModel.create({ text, rating, author: _id })
        .then(comment => {
            userModel
                .findByIdAndUpdate({ _id }, { $addToSet: { comments: comment._id } }, { new: true })
                .then(updatedUser => {
                    comment.author = updatedUser;
                    res.status(200).json(comment);
                })
                .catch(err => {

                    console.log(err);
                })
        })
        .catch(next);
}

function deleteComment(req, res, next) {

    const { commentId } = req.params;
    const { _id: userId } = req.user;

    Promise.all([
        blogModel.findOneAndDelete({ _id: commentId }),
        userModel.findOneAndUpdate({ _id: userId }, { $pull: { comments: commentId } }),

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

    getComments,
    getTopComments,
    getMyComments,
    createComment,
    deleteComment,

}

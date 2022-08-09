const { blogModel, userModel } = require('../models');

function getComments(req, res, next) {
    blogModel.find()
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
    const { comment, rating } = req.body;
    const _id = req.user._id;

    blogModel.create({ comment, rating, author: _id })
        .then(comment => {
            console.log("created comment----", comment);
            userModel
                .findByIdAndUpdate({ _id }, { $addToSet: { comments: comment._id } }, { new: true })
                .then(updatedUser => {
                    res.status(200).json(updatedUser)
                })
                .catch(err => {

                    console.log(err);
                })

            res.json(comment)

        })
        .catch(next);
}

function deleteComment(req, res, next) {
    const { commnetId } = req.params;
    const { _id: userId } = req.user;

    Promise.all([
        blogModel.findOneAndDelete({ _id: commnetId }),
        userModel.findOneAndUpdate({ _id: userId }, { $pull: { comments: commnetId } }),

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
    getMyComments,
    createComment,
    deleteComment,

}

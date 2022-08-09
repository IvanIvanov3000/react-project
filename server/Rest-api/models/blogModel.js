const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const blogSchema = new mongoose.Schema({
    // likes: [{
    //     type: ObjectId,
    //     ref: "User"
    // }],
    comment: {
        type: String,
        required: true,
        minlength: [100, 'Description should be at least 100 characters'],
        maxlength: [220, 'Description should be at max 220 characters'],
    },
    rating: {
        type: Number,
        required: true,
        min: [1, 'Rating is from 1 to 10'],
        max: [10, 'Rating is from 1 to 10'],
    },
    author: {
        type: ObjectId,
        ref: "User"
    },
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Blog', blogSchema);

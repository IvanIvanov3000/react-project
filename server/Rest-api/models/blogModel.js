const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const blogSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlength: [10, 'Description should be at least 10 characters'],
        maxlength: [250, 'Description should be at max 250 characters'],
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

const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    isPublic: {
        type: Boolean,
        required: true
    },
    year: {
        type: Number,
        required: true,
        min: [1800, "Dude, films weren't envented before 1800. Are u crazy?"],
        max: [2023, "Dude, are u from the future. Are u a time traveler?"]

    },
    tag: {
        type: String,
        required: true,
        minlength: [5, 'Tag should be at least 5 characters'],
        maxlength: [30, 'Tag should be at max 30 characters'],
    },
    description: {
        type: String,
        required: true,
        minlength: [100, 'Description should be at least 100 characters'],
        maxlength: [2220, 'Description should be at max 2050 characters'],
    },
    likes: [{
        type: ObjectId,
        ref: "User"
    }],
    author: {
        type: ObjectId,
        ref: "User"
    },
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Movie', movieSchema);

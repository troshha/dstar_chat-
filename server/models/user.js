const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        roomName: {
            type: String,
            required: true,
        },
        img: String,
        messages: Array(String),
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;

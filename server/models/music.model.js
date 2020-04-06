const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    name: String,
    artist: String,
    genre: String
});

const Music = mongoose.model("Music", musicSchema);

module.exports = Music;
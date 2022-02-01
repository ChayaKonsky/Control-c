const mongoose = require('mongoose');

const TextSchema = mongoose.Schema({
    title: String,
    id: String,
    text: String,
    password: String
});

module.exports = mongoose.model('Text',TextSchema);
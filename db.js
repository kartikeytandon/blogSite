const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
    title: String,
    content: String
})

module.exports = mongoose.model("db", blockSchema)
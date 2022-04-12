const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    name: String,
    latitude: Number,
    longitude: Number
});

let Location = mongoose.model('LocationSchema', LocationSchema);

module.exports = { Location };

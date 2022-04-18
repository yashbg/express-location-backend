const mongoose = require('mongoose');

const { Schema } = mongoose;

const locationSchema = new Schema({
    name: {
        type: String,
        unique: true,
    },
    latitude: Number,
    longitude: Number,
});

const Location = mongoose.model('Location', locationSchema);

module.exports = { Location };

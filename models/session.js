'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SessionSchema = new Schema({
    pin: {
        type: String
    },
    time: {
        type: String
    },
    owner: {
        type: String
    }
});

module.exports = mongoose.model('Sessions', SessionSchema);
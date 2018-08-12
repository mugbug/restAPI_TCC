'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SessionSchema = new Schema({
    sessionPin: {
        type: String
    },
    sessionStamp: {
        type: String
    },
    sessionTeacher: {
        type: String
    }
});

module.exports = mongoose.model('Sessions', SessionSchema);
'use strict';


var mongoose = require('mongoose'),
    Session = mongoose.model('Sessions');

exports.list_all_sessions = function (req, res) {
    Session.find({}, function (err, session) {
        if (err)
            res.send(err);
        res.json(session);
    });
};

exports.create_a_session = function (req, res) {
    var new_session = new Session(req.body);
    new_session.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.delete_a_session = function (req, res) {
    console.log(req.params.sessionId);
    Session.remove({pin: req.params.sessionId}, function (err, session) {
        if (err)
            res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
}
'use strict';

var mongoose = require('mongoose'),
Session = mongoose.model('Sessions'),
Comment = mongoose.model('Comments');

exports.list_all_comments = function (req, res) {

    Comment.find({}, function (err, session) {
        if (err)
            res.send(err);
        res.json(session);
    });
};

exports.create_a_comment = function (req, res) {

    var new_comment = new Comment(req.body);
    new_comment.save(function (err, comment) {
        if (err)
            res.send(err);
        res.json(comment);
    });
};

exports.delete_a_session = function (req, res) {

    Comment.remove({ pin: req.params.guestId }, function (err, session) {
        if (err)
            res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
}
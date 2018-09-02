'use strict';

var mongoose = require('mongoose'),
Session = mongoose.model('Sessions'),
Comment = mongoose.model('Comments');

exports.list_all_comments = function (req, res) {

    Comment.find({}, function (err, comment) {
        if (err) {
            res.send(err);
            return
        }
        res.json(comment);
    });
};

exports.create_a_comment = function (req, res) {

    var new_comment = new Comment(req.body);

    Session.find({ pin: req.body.pin, guests: { "$in": [req.body.guestId] } }, function (err, comment) {
        
        if (err) {
            res.send(err);
            return
        }

        if(comment.length){

            new_comment.save(function (err, comment) {
                if (err)
                    res.send(err);
                res.json(comment);
            });
        }

        else{

            res.json({ message: 'Out of the session' });
        }
    });
};

exports.delete_a_comment = function (req, res) {

    Comment.remove({ pin: req.params.guestId }, function (err, session) {
        if (err) {
            res.send(err);
            return;
        }
        res.json({ message: 'Task successfully deleted' });
    });
}
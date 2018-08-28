'use strict';

var mongoose = require('mongoose'),
User = mongoose.model('Users')

exports.list_all_users = function (req, res) {

    User.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.create_a_user = function (req, res) {

    var new_user = new User(req.body);
    new_user.save(function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.delete_a_user = function (req, res) {

    User.remove({ pin: req.params.userId }, function (err, user) {
        if (err)
            res.send(err);
        res.json({ message: 'User successfully deleted' });
    });
};
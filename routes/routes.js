'use strict';
module.exports = function (app) {
    var controller = require('../controllers/controllerTeacher');

    // todoList Routes
    app.route('/sessions')
        .get(controller.list_all_sessions)
        .post(controller.create_a_session);

    app.route('/sessions/:sessionId', function (req, res) {
        res.send(req.params.sessionId);
    })
        .delete(controller.delete_a_session);
};
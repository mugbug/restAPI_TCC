'use strict';
module.exports = function (app) {
    var controller = require('../controllers/sessionController');

    // todoList Routes
    app.route('/sessions')
        .get(controller.list_all_sessions)
        .post(controller.create_a_session);

    app.route('/sessions/:sessionId/:guestId', function (req, res) {
        res.send(req.params.sessionId);
        res.send(req.params.guestId);
    })
        .put(controller.add_a_guest)
        .delete(controller.delete_a_session);
};
'use strict';
const User = require('../models/user.model');

exports.sendPassword = function (req, res) {
    User.sendPassword(req.body.email, function (err, user) {
        if (err)
            return res.send(err);
        return res.json(user);
    });
};

exports.findByEmailAndPassword = function (req, res) {
    User.findByEmailAndPassword([req.body.email, req.body.password], function (err, user) {
        if (err)
            return res.send(err);
        return res.json(user);
    });
};


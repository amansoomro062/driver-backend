'use strict';
const Admin = require('../models/admin.model');

exports.findByEmailAndPassword = function (req, res) {
    Admin.findByEmailAndPassword([req.body.email, req.body.password], function (err, admin) {
        if (err)
            return res.send(err);
        return res.json(admin);
    });
};


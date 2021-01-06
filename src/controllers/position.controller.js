'use strict';
const Position = require('../models/position.model');

exports.addPosition = function (req, res) {
    Position.addPosition([req.body.name, req.body.id], function (err, position) {
        if (err)
            return res.send(err);
        return res.json(position);
    });
};

exports.findById = function (req, res) {
    console.log(req.params.id)
    Position.findById(req.params.id, function (err, position) {
        if (err)
            return res.send(err);
        console.log(position)
        res.json(position);
    });
};


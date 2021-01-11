'use strict';
const Form = require('../models/form.model');

exports.insert = function (req, res) {
    const new_setting = new Form(req.body);
    //handles null error
    if(req.body.user_id == null) {
        return res.send(false);
    }
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Form.create(new_setting, function (err, setting) {
            if (err)
                return res.send(err);
            return res.json({ error: false, message: "Record added successfully!", data: setting });
        });
    }
};

exports.update = function (req, res) {
    const new_setting = new Form(req.body);
    //handles null error
    if(req.body.user_id == null) {
        return res.send(false);
    }
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Form.update(new_setting, function (err, setting) {
            if (err)
                return res.send(err);
            return res.json({ error: false, message: "Record added successfully!", data: setting });
        });
    }
};

exports.findById = function (req, res) {
    console.log(req.params.id)
    Form.findById(req.params.id, function (err, position) {
        if (err)
            return res.send(err);
        console.log(position)
        res.json(position);
    });
};


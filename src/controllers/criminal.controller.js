'use strict';
const Criminal = require('../models/criminal.model');

exports.create = function (req, res) {
    const new_setting = new Criminal(req.body);
    console.log(new_setting)
    //handles null error
    if(req.body.user_id == null) {
        return res.send(false);
    }
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Criminal.create(new_setting, function (err, setting) {
            if (err)
                return res.send(err);
            return res.json({ error: false, message: "Record added successfully!", data: setting });
        });
    }
};

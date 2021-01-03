'use strict';
const Setting = require('../models/setting.model');
exports.findAll = function(req, res) {
Setting.findAll(function(err, setting) {
  console.log('controller')
  if (err)
  res.send(err);
//   console.log('res', setting);
  res.send(setting);
});
};



exports.findActive = function(req, res) {
    Setting.findActive(function(err, setting) {
      console.log('controller')
      if (err)
      res.send(err);
      console.log('res', setting);
      res.send(setting);
    });
};

exports.create = function (req, res) {
    const new_setting = new Setting(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Setting.create(new_setting, function (err, setting) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Setting added successfully!", data: setting });
        });
    }
};


exports.setActive = function (req, res) {
    Setting.setActive(req.body.id, function (err, setting) {
        if (err){
            console.log(err)    
            return res.send(err);    
        }

        return res.json(setting);
    });
};

exports.setInActive = function (req, res) {
    Setting.setInActive(req.body.id, function (err, setting) {
        if (err){
            console.log(err)    
            return res.send(err);    
        }
        return res.json(setting);
    });
};

// exports.findById = function (req, res) {
//     Setting.findById(req.params.id, function (err, setting) {
//         if (err)
//             res.send(err);
//         res.json(setting);
//     });
// };
// exports.update = function (req, res) {
//     if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
//         res.status(400).send({ error: true, message: 'Please provide all required field' });
//     } else {
//         Setting.update(req.params.id, new Setting(req.body), function (err, setting) {
//             if (err)
//                 res.send(err);
//             res.json({ error: false, message: 'Setting successfully updated' });
//         });
//     }
// };
// exports.delete = function (req, res) {
//     Setting.delete(req.params.id, function (err, setting) {
//         if (err)
//             res.send(err);
//         res.json({ error: false, message: 'Setting successfully deleted' });
//     });
// };
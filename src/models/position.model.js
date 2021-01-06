'use strict';
var dbConn = require('../../config/db.config');

var Position = function (position) {
    this.name = position.name;
    this.id = position.id;
};

Position.addPosition = function ([name,id], result) {
    dbConn.query("INSERT into positions (name, id) VALUES (?, ?)", [name, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(typeof(res))
            result(res, res);     
        }
    });
};

Position.findById = function (id, result) {
    dbConn.query("Select * from positions where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};


module.exports = Position;
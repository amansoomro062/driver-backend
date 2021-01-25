'use strict';
var dbConn = require('../../config/db.config');
//Setting object create
var Accident2 = function (accident) {
    this.charge = accident.charge
    this.convictionsDate = accident.convictionsDate
    this.location = accident.location
    this.penalty= accident.penalty
    this.user_id =accident.user_id
};

Accident2.create = function (newEmp, result) {
    dbConn.query("INSERT INTO accidents2 set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(false, null);
        }
        else {
            result(true, res.insertId);
        }
    });
};


module.exports = Accident2;
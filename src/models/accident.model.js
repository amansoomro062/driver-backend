'use strict';
var dbConn = require('../../config/db.config');
//Setting object create
var Accident = function (accident) {
    this.accidentDate = accident.accidentDate
    this.fatalities = accident.fatalities
    this.hazardousMaterialSpill  = accident.hazardousMaterialSpill
    this.injuries = accident.injuries
    this.user_id =accident.user_id
};

Accident.create = function (newEmp, result) {
    dbConn.query("INSERT INTO accidents set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(false, null);
        }
        else {
            result(true, res.insertId);
        }
    });
};


module.exports = Accident;
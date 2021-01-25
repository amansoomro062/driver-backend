'use strict';
var dbConn = require('../../config/db.config');
//Setting object create
var Driving = function (driving) {
    this.classOfEquipment = driving.classOfEquipment
    this.drivingExperience = driving.drivingExperience
    this.dump = driving.dump
    this.flat = driving.flat
    this.fromDate = driving.fromDate
    this.miles = driving.miles
    this.reefer = driving.reefer
    this.tank = driving.tank
    this.toDate = driving.toDate
    this.user_id = driving.user_id
    this.van = driving.van

};

Driving.create = function (newEmp, result) {

    if(newEmp.dump !== true) {
        newEmp.dump = false
    }

    if(newEmp.flat !== true) {
        newEmp.flat = false
    }

    if(newEmp.van !== true) {
        newEmp.van = false
    }

    if(newEmp.reefer !== true) {
        newEmp.reefer = false
    }

    if(newEmp.tank !== true) {
        newEmp.tank = false
    }
    dbConn.query("INSERT INTO driving_experience set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(false, null);
        }
        else {
            result(true, res.insertId);
        }
    });
};


module.exports = Driving;
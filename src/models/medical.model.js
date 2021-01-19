'use strict';
var dbConn = require('../../config/db.config');
//Setting object create
var Medical = function (medical) {
    this.expirationDate = medical.expirationDate
    this.reason = medical.reason
    this.registryNumber = medical.registryNumber
    this.stateIssued = medical.stateIssued
    this.user_id = medical.user_id
};

Medical.create = function (newEmp, result) {
    dbConn.query("INSERT INTO medical set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(false, null);
        }
        else {
            result(true, res.insertId);
        }
    });
};


module.exports = Medical;
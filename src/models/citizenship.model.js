'use strict';
var dbConn = require('../../config/db.config');
//Setting object create
var Citizenship = function (citizenship) {
    this.allowedToWork = citizenship.allowedToWork
    this.greenCard = citizenship.greenCard
    this.greenCardExpiration = citizenship.greenCardExpiration
    this.greenCardIssueDate = citizenship.greenCardIssueDate
    this.permanentResident = citizenship.permanentResident
    this.usCitizen = citizenship.usCitizen
    this.socialNumber = citizenship.socialNumber
    this.workPermit = citizenship.workPermit
    this.workPermitExpiration = citizenship.workPermitExpiration
    this.workPermitIssueDate = citizenship.workPermitIssueDate
    this.workPermitNumber = citizenship.workPermitNumber
    this.user_id = citizenship.user_id
};

Citizenship.create = function (newEmp, result) {
    dbConn.query("INSERT INTO citizenship set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(false, null);
        }
        else {
            result(true, res.insertId);
        }
    });
};


module.exports = Citizenship;
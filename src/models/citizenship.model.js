'use strict';
var dbConn = require('../../config/db.config');
//Setting object create
var Citizenship = function (drug) {
    this.allowedToWork = drug.allowedToWork
    this.greenCard = drug.greenCard
    this.greenCardExpiration = drug.greenCardExpiration
    this.greenCardIssueDate = drug.greenCardIssueDate
    this.permanentResident = drug.permanentResident
    this.usCitizen = drug.usCitizen
    this.workPermit = drug.workPermit
    this.workPermitExpiration = drug.workPermitExpiration
    this.workPermitIssueDate = drug.workPermitIssueDate
    this.workPermitNumber = drug.workPermitNumber
    this.user_id = drug.user_id
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
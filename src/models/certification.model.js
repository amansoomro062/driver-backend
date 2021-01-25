'use strict';
var dbConn = require('../../config/db.config');
//Setting object create
var Certification = function (certification) {
    this.certificationOrPermit = certification.certificationOrPermit
    this.dateIssued = certification.dateIssued
    this.expirationDate= certification.expirationDate
    this.stateIssued= certification.stateIssued
    this.twic = certification.twic
    this.tsa = certification.tsa
    this.type= certification.type
    this.user_id =certification.user_id
};

Certification.create = function (newEmp, result) {
    dbConn.query("INSERT INTO certifications set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(false, null);
        }
        else {
            result(true, res.insertId);
        }
    });
};


module.exports = Certification;
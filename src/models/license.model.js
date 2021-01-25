'use strict';
var dbConn = require('../../config/db.config');
//Setting object create
var License = function (license) {
    this.companyName = license.companyName
    this.endorsements = license.endorsements
    this.expirationDate = license.expirationDate
    this.issueDate = license.issueDate
    this.stateIssued = license.stateIssued
    this.type = license.type
    this.user_id =license.user_id
};

License.create = function (newEmp, result) {
    dbConn.query("INSERT INTO driver_license set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(false, null);
        }
        else {
            result(true, res.insertId);
        }
    });
};


module.exports = License;
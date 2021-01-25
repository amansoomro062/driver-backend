'use strict';
var dbConn = require('../../config/db.config');
//Setting object create
var License2 = function (license) {
    this.deniedLicense = license.deniedLicense
    this.suspendedOrRevokedReason = license.deniedOrRevokedReason
    this.reasonDenied = license.reasonDenied
    this.suspendedOrRevoked = license.suspendedOrRevoked
    this.user_id = license.user_id
};

License2.create = function (newEmp, result) {
    dbConn.query("INSERT INTO driver_license2 set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(false, null);
        }
        else {
            result(true, res.insertId);
        }
    });
};


module.exports = License2;
'use strict';
var dbConn = require('../../config/db.config');
//Setting object create
var Signature = function (signature) {
    this.signature = signature.signature
    this.signatureDate = signature.signatureDate
    this.user_id =  signature.user_id
};

Signature.create = function (newEmp, result) {
    dbConn.query("INSERT INTO signature set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(false, null);
        }
        else {
            result(true, res.insertId);
        }
    });
};


module.exports = Signature;
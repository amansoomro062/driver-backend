'use strict';
var dbConn = require('../../config/db.config');
//Setting object create
var Criminal = function (criminal) {
    this.felonies = criminal.felonies
    this.feloniesReason = criminal.feloniesReason
    this.misdemeanor = criminal.misdemeanor
    this.misdemeanorReason = criminal.misdemeanorReason
    this.user_id =criminal.user_id
};

Criminal.create = function (newEmp, result) {
    dbConn.query("INSERT INTO criminal set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(false, null);
        }
        else {
            result(true, res.insertId);
        }
    });
};


module.exports = Criminal;
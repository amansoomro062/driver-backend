'use strict';
var dbConn = require('../../config/db.config');
//Setting object create
var Drug = function (drug) {
    this.failedToUndertakeOrComplete = drug.failedToUndertakeOrComplete
    this.refusedToTest = drug.refusedToTest
    this.resultGreaterThanZeroPointZeroFour = drug.resultGreaterThanZeroPointZeroFour
    this.user_id = drug.user_id
    this.verifiedDrugTest = drug.verifiedDrugTest
    this.violatedAlcohol = drug.violatedAlcohol
};

Drug.create = function (newEmp, result) {
    dbConn.query("INSERT INTO drug set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(false, null);
        }
        else {
            result(true, res.insertId);
        }
    });
};


module.exports = Drug;
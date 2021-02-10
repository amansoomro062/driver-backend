'use strict';
var dbConn = require('../../config/db.config');
//Setting object create
var Welcome = function (welcome) {
    this.employer = welcome.employer;
    this.employer_address = welcome.employer_address
    this.position = welcome.position
    this.application_date = welcome.application_date
    this.user_id = welcome.user_id
    this.initials = welcome.initials
};

Welcome.create = function (newEmp, result) {
    dbConn.query("INSERT INTO application set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(false, null);
        }
        else {
            result(true, res.insertId);
        }
    });
};

Welcome.get = function (id,result) {
    dbConn.query("Select * from application where user_id = ?",id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('settings : ', res);
            result(null, res);
        }
    });
};

module.exports = Welcome;
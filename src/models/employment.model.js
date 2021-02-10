'use strict';
var dbConn = require('../../config/db.config');
//Setting object create
var Employment = function (employment) {
    this.city =  employment.city
    this.companyName =  employment.companyName
    this.contactPerson=  employment.contactPerson
    this.fromDate=  employment.fromDate
    this.jobDescription= employment.jobDescription
    this.mobilePhone=  employment.mobilePhone
    this.positionHeld= employment.positionHeld
    this.reason=  employment.reason
    this.salary=  employment.salary + " " + employment.salary2
    this.state=  employment.state
    this.streetAddress= employment.streetAddress
    this.toDate=  employment.toDate
    this.zip=      employment.zip
    this.user_id = employment.user_id
};

Employment.create = function (newEmp, result) {
    dbConn.query("INSERT INTO employment_history set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(false, null);
        }
        else {
            result(true, res.insertId);
        }
    });
};

Employment.get = function (id,result) {
    dbConn.query("Select * from contact where user_id = ?",id, function (err, res) {
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


module.exports = Employment;
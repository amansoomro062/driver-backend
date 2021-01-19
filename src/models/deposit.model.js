'use strict';
var dbConn = require('../../config/db.config');
//Setting object create
var Deposit = function (deposit) {
    this.accountNumber = deposit.accountNumber
    this.bankName = deposit.bankName
    this.city = deposit.city
    this.mobilePhone =deposit.mobilePhone
    this.routingNumber =deposit.routingNumber
    this.state =  deposit.state
    this.street = deposit.street
    this.type = deposit.type
    this.user_id =deposit.user_id
    this.zip = deposit.zip
};

Deposit.create = function (newEmp, result) {
    dbConn.query("INSERT INTO deposit set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(false, null);
        }
        else {
            result(true, res.insertId);
        }
    });
};


module.exports = Deposit;
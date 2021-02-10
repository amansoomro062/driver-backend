'use strict';
var dbConn = require('../../config/db.config');
//Setting object create
var Contact = function (contact) {
    this.city = contact.city
    this.dateFrom = contact.dateFrom
    this.dateOfBirth = contact.dateOfBirth
    this.firstName = contact.firstName
    this.homePhone = contact.homePhone
    this.lastName = contact.lastName
    this.middleName = contact.middleName
    this.mobilePhone = contact.mobilePhone
    this.otherPhone = contact.otherPhone
    this.state = contact.state
    this.street = contact.street
    this.zip = contact.zip
    this.user_id = contact.user_id
};

Contact.create = function (newEmp, result) {
    dbConn.query("INSERT INTO contact set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(false, null);
        }
        else {
            result(true, res.insertId);
        }
    });
};

Contact.get = function (id,result) {
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


module.exports = Contact;
'use strict';
var dbConn = require('../../config/db.config');
//Setting object create
var Form = function (form) {
    this.one = form.data[0],
    this.two = form.data[1],
    this.three = form.data[2],
    this.four = form.data[3],
    this.five = form.data[4],
    this.six = form.data[5],
    this.seven = form.data[6],
    this.eight = form.data[7],
    this.nine = form.data[8],
    this.ten = form.data[9],
    this.eleven = form.data[10],
    this.twelve = form.data[11],
    this.thirteen = form.data[12],
    this.fourteen = form.data[13],
    this.user_id = form.user_id
};

Form.create = function (newEmp, result) {
    dbConn.query("INSERT INTO form_status set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(false, null);
        }
        else {
            result(true, res.insertId);
        }
    });
};


Form.update = function (newEmp, result) {
    const sql = `UPDATE driver_application.form_status
    SET
    one = ${newEmp.one},
    two = ${newEmp.two},
    three = ${newEmp.three},
    four = ${newEmp.four},
    five = ${newEmp.five},
    six = ${newEmp.six},
    seven = ${newEmp.seven},
    eight = ${newEmp.eight},
    nine = ${newEmp.nine},
    ten = ${newEmp.ten},
    eleven = ${newEmp.eleven},
    twelve = ${newEmp.twelve},
    thirteen = ${newEmp.thirteen},
    fourteen = ${newEmp.fourteen}
    WHERE user_id =  ${newEmp.user_id}`;
    dbConn.query(sql, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(false, null);
        }
        else {
            result(true, res.insertId);
        }
    });
};

Form.findById = function (id, result) {
    dbConn.query("Select * from form_status where user_id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};


module.exports = Form;
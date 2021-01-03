'use strict';
var dbConn = require('../../config/db.config');
//Setting object create
var Setting = function (setting) {
    this.company_name = setting.company_name;
    this.company_street = setting.company_street
    this.company_city= setting.company_city
    this.company_state= setting.company_state
    this.company_zip= setting.company_zip
    this.years_of_resisdency_required= setting.years_of_resisdency_required
    this.number_of_previous_employers_required= setting.number_of_previous_employers_required
    this.years_of_previous_employers_required= setting.years_of_previous_employers_required
    this.notice= setting.notice
};
Setting.create = function (newEmp, result) {
    dbConn.query("INSERT INTO settings set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
// Setting.findById = function (id, result) {
//     dbConn.query("Select * from settings where id = ? ", id, function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//         }
//         else {
//             result(null, res);
//         }
//     });
// };
Setting.findAll = function (result) {
    dbConn.query("Select * from settings", function (err, res) {
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
// Setting.update = function (id, setting, result) {
//     dbConn.query("UPDATE settings SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [setting.first_name, setting.last_name, setting.email, setting.phone, setting.organization, setting.designation, setting.salary, id], function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//         } else {
//             result(null, res);
//         }
//     });
// };
// Setting.delete = function (id, result) {
//     dbConn.query("DELETE FROM settings WHERE id = ?", [id], function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//         }
//         else {
//             result(null, res);
//         }
//     });
// };
module.exports = Setting;
'use strict';
var dbConn = require('../../config/db.config');

var Admin = function (admin) {
    this.email = admin.email;
    this.password = admin.password
};

Admin.findByEmailAndPassword = function ([email,password], result) {
    dbConn.query("Select * from admin_login where email = ? AND password = ? ", [email, password], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(typeof(res))
            result(res, res);     
        }
    });
};


module.exports = Admin;
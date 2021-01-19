'use strict';
var dbConn = require('../../config/db.config');
var nodemailer = require('nodemailer');
var generator = require('generate-password');

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "6f8eb4971cc967",
        pass: "9322aa78ed53bd"
    }
});

var User = function (user) {
    this.email = user.email;
    this.password = user.password
};
User.findByEmailAndPassword = function ([email,password], result) {
    dbConn.query("Select * from user where email = ? AND password = ? ", [email, password], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(res, res);     
        }
    });
};
User.sendPassword = function (email, result) {
    console.log(email);
    var password = generator.generate({
        length: 6,
        numbers: true
    });

    if (password != null || password != '') {
        const message = {
            from: 'driverApp@talbiLogistics.com', // Sender address
            to: email,         // List of recipients
            subject: 'Your password for driver verification', // Subject line
            text: 'Password for verification is : '+password // Plain text body
        };
        transport.sendMail(message, function(err, info) {
            if (err) {
              console.log(err)
            } else {
              console.log(info);
              dbConn.query('SELECT email FROM user WHERE email ="' + email +'"', function (err, theRes) {
                if (err) {
                    console.log("error: ", err);
                    result(false,null);
                }
                else {
                    if(Object.keys(theRes).length > 0) {
                        dbConn.query("UPDATE user set password = ? where email = ?", [password, email], function (err, res) {
                            if (err) {
                                console.log("error: ", err);
                                result(false, null);
                            }
                            else {
                                console.log(typeof(res))
                                return result(true, res);     
                            }
                        });
                    } else {

                        dbConn.query("INSERT into user (email, password) VALUES (?,?)", [email, password], function (err, res) {
                            if (err) {
                                console.log("error: ", err);
                                result(false, null);
                            }
                            else {
                                console.log(typeof(res))
                                console.log(res.insertId);
                                const id = res.insertId;

                                dbConn.query("INSERT into form_status (one, two, three, four, five, six, seven, eight, nine, ten,eleven,twelve, thirteen, fourteen, user_id) VALUES (0,0,0,0,0,0,0,0,0,0,0,0,0,0,?)", id, function (err, res) {
                                    if (err) {
                                        console.log("error: ", err);
                                        result(false, null);
                                    }
                                    else {
                                        console.log(typeof(res))
                                        return result(true, res);     
                                    }
                                });    
                            }
                        });


                    }
                }
                });
            }
        });

        
    }


};


module.exports = User;
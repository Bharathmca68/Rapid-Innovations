const crypto = require('crypto')

const User = require('../modal/login');

exports.login = (req, res) => {
    const reqBody = req.body;

    const {
        email,
        password
    } = reqBody;

    const md5sum = crypto.createHash('md5');
    const resf = md5sum.update(password).digest('hex');
    console.log(resf);

    const userObj = new User(
        {
            email: email,
            password: resf
        }
    );

    User.find({
        email: email,
        password: resf
    }).then(result => {
        if (result.length > 0) {
            res.status(200).json({
                message: "User Loggedin Successfully",
                user: result
            });
        } 
    }).catch(error => {
        res.status(500).json({
            message: "Error in Database",
            error: error
        });
    });
    userObj.save().then(response => {
        res.status(201).json({
            message: "User Registered Successfully",
            user: response
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error in Database",
            error: error
        });
    });
}
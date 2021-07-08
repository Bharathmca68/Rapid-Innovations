const crypto = require("crypto");

const User = require("../modal/login");

exports.login = (req, res) => {
  const reqBody = req.body;

  const { email, password } = reqBody;

  //encryptions of password
  const md5sum = crypto.createHash("md5");
  const resf = md5sum.update(password).digest("hex");
  //   console.log(resf);

  User.find({
    email: email,
    password: resf,
  })
    .then((result) => {
      if (result.length > 0) {
        res.status(200).json({
          message: "User Loggedin Successfully",
          user: result,
        });
      } else {
        res.status(404).json({
          message: "incorrect email and password",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Error in Database",
        error: error,
      });
    });
};

exports.register = (req, res) => {
  const { Name, email, password, phone_no, Address } = req.body;

  // encryptions
  const md5sum = crypto.createHash("md5");
  const resf = md5sum.update(password).digest("hex");
  console.log(resf);

  const obj = new Date();

  const regObj = new User({
    Name: Name,
    email: email,
    password: resf,
    phone_no: phone_no,
    Address: Address,
    Date: obj,
  });

  regObj
    .save()
    .then((response) => {
      res.status(201).json({
        message: "User Registered Successfully",
        user: response,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Error in Database",
        error: error,
      });
    });
};

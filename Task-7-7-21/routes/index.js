const express = require('express');
const router = express.Router();


const logincontroler = require('../controller/login')


router.post('/userLogin', logincontroler.login);


module.exports = router;
const express = require('express');
const route = express.Router();
const usercontroller = require('../controller/user.controller');

route.post('/data', usercontroller.createData);

module.exports = route;
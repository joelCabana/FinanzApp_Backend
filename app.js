const express = require('express');
const cors = require('cors');

//execute express
const app = express();
//configuration
app.set('port',process.env.PORT || 300);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//route

module.exports = app;
const express = require('express');
const cors = require('cors');

//execute express
const app = express();
//configuration
app.set('port',process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/category',require('./src/routes/category.routes'));

module.exports = app;
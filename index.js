require('./database');

const app = require('./app');

app.listen(app.get('port'));
console.log('server on port ',process.env.PORT || app.get('port'));
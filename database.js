const mongoose = require('mongoose');
const URL = 'mongodb+srv://joelxcabana:41609331@cluster0.oxd3a.mongodb.net/DB_FINANZAPP?retryWrites=true&w=majority';

mongoose.connect('mongodb://localhost/finanzapp',{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db=> console.log('DB is connected'))
.catch(err=> console.log(err));
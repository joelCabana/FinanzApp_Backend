const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://joelxcabana:41609331@cluster0.oxd3a.mongodb.net/DB_FINANZAPP?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db=> console.log('DB is connected'))
.catch(err=> console.log(err));
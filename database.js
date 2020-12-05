const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/finanzapp',{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db=> console.log('DB is connected'))
.catch(err=> console.log(err));
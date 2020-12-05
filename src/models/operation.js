const {Schema,model} = require('mongoose');
const category = require('./category');

const operationSchema = new Schema({
    concept:{type:String, required:false},
    amount: {type:Number, required:true},
    date:{type:Date,required:true},
    type:{type:String, required:true},
    category:{type:Schema.Types.ObjectId,ref:category}
})

module.exports = model('Operation',operationSchema);
const {Schema, model} = require('mongoose');
const Operation = require('./operation');


const userSchema = new Schema({
    first_name:{type:String, required:true},
    last_name:{type:String, required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    operation: [{type: Operation.schema, required:false}]
})

module.exports = model('User',userSchema);
const user = require('../models/user');
const User = require('../models/user');
const userCtrl = {};

userCtrl.getUsers = async(req,res)=>{
    const users = await User.find().populate("operation.category");
    res.json(users);
}

userCtrl.getUser = async(req,res)=>{
    const user = await User.findById(req.params.id).populate("operation.category");
    res.send(user);
}

userCtrl.createUser = async(req,res)=>{
    
    const criteria = {
        email: req.body.email
    };
    User.findOne(criteria,async function(err, user){
        //En caso de error
        if(err){
            res.json({
                status: 0,
                message: 'error'
            })
        }
        if(!user) {
            const newUser = new User(req.body);
            await newUser.save();
            res.send({message:'User Created'});
        }
        else{
            res.json({
                status: 1,
                message: "exits"
            })
        }
    })
}

userCtrl.updateUser = async(req,res)=>{
    await User.findByIdAndUpdate(req.params.id,req.body);
    res.send({message:'User Updated'});
}

userCtrl.deleteUser = async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.send({message:'User Deleted'});
}

userCtrl.loginUser = async(req, res) => {
    const criteria = {
            email: req.body.email,
            password: req.body.password
        }
    User.findOne(criteria, function(err, user) {
        if (err) {
            res.json({
                status: 0,
                message: 'error'
            })
        };
        if (!user) {
            res.json({
                status: 0,
                message: "not found"
            })
        } else {
            res.json({
                status: 1,
                message: "success",
                _id: user._id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email
            });
        }
    })
}


module.exports = userCtrl;
const Category = require('../models/category');

const categoryCtrl = {}

categoryCtrl.getCategories = async(req,res)=>{
    const categories = await Category.find().sort({name: "asc"});
    res.json(categories); 
}

categoryCtrl.createCategory = async(req,res)=>{
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.send({message:'Category created'});
}

categoryCtrl.getCategory = async(req,res)=>{
 const category = await Category.findById(req.params.id);
 res.send(category);
}

categoryCtrl.deleteCategory = async(req,res)=>{
    const category = await Category.findByIdAndDelete(req.params.id);
    res.send({message:'Category deleted'});
}

categoryCtrl.updateCategory = async(req,res)=>{
    await Category.findByIdAndUpdate(req.params.id,req.body);
    res.send({message:'Category Updated'})
}

module.exports = categoryCtrl;
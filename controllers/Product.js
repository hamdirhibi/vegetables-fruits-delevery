const express = require ('express'); 
const  Product = require('../models/Product'); 
const  Category = require('../models/Category'); 
var fs = require('fs');
const router = express.Router(); 


//getAll product
exports.Product_findAll= async  (req,res)=>{
    try{
        const product = await Product.find(); 
        res.json(product);
    }catch (err){
        res.json({message : err}); 
        console.log(err) ;
    }
}


//get speicific product 
exports.Product_findOne = async (req,res)=>{
    try{
    const product = await Product.findById(req.params.productId); 
    res.json(product); 
    }
    catch(err){
        res.json({message : err});
    }
}



//Create New product 
exports.Product_save=async (req,res)=>{

const category = await Category.findOne({
    name : req.body.category 
})

if (!category) 
    return res
    .status(409)
    .json ({message : 'category not exist'}) ; 

console.log(category)

const product = new Product({
   name : req.body.name, 
   price :  req.body.price , 
   category : category._id , 
   image :  req.files[0].originalname , 
   }); 
    
    try{
    const savedProduct = await Product.create(product).
    then(()=>{
        console.log('product created ');    
    });
    res.status(200).json(product); 
    }catch(err){
        res.json({message : err});
    }

}


//Delete Product 
exports.Product_delete=async (req,res)=>{
    try {
    const removedProduct= await  Product.remove({_id: req.params.productId})
    res.json(removedProduct);
    }
    catch (err ){
        res.json({message : err});
    }
}


//Delete All Product 
exports.Product_deleteAll=async (req,res)=>{
    try {
    const removedProduct= await  Product.deleteMany()
    res.json(removedProduct);
    }
    catch (err ){
        res.json({message : err});
    }
}




//Update  Card  
exports.Product_update=async (req,res)=>{
    try{
    const updateCard = await Product.updateOne(
        {_id:req.params.productId},
         {$set : {
            name : req.body.name, 
            price :  req.body.price , 
            category : req.body.category , 
            image :  req.body.image , 
         }
     }); 
         res.json(updateCard);
    }catch (err){
        res.json({message : err})
    }
}

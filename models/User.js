const mongoose = require ('mongoose') ;  
const userSchema = new mongoose.Schema({
    fullname : {
        type : String , 
        require : true , 
        min : 6 ,
        max : 255
    }, 
    phone : {
        type : Number , 
        require : true , 
        size : 8 
    }, 
    address : {
        type : String , 
        require : true , 
        min : 6 ,
        max : 255
    }, 
    role : {
        type : String , 
        require : true, 
    },
    email : {
        type : String , 
        require : true, 
        max : 255 , 
        min : 6
    },
    password : {
        type : String , 
        require : true , 
        max : 1024 ,
        min : 6 
    } , 
    
})


module.exports = mongoose.model('User' , userSchema) ; 
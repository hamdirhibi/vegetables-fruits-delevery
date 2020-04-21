const Joi = require('joi');

//register validation 
const registerValidation = (data)=>{
    const schema = Joi.object().keys( {
        fullname : Joi.string()
        .min(6)
        .required(), 
        
        address : Joi.string()
        .min(6)
        .required(), 
        phone : Joi.number()
        .min(8)
        .required() , 
        email : Joi.string()
        .min(6)
        .required()
        .email(),
        
        password : Joi.string()
        .min(6)
        .required() 
    }
    )
    
    return Joi.validate(data,schema) ; 
    
    
}
//login validation
const loginValidation = (data)=>{
    const schema = Joi.object().keys( {
       
        
        email : Joi.string()
        .min(6)
        .required()
        .email(),
        
        password : Joi.string()
        .min(6)
        .required() 
    }
    )
    
    return Joi.validate(data,schema) ; 
    
    
}
    

module.exports.registerValidation = registerValidation  ;
module.exports.loginvalidation = loginValidation  ;

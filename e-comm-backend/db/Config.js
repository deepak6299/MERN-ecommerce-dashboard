const mongoose=require('mongoose');
try{
    mongoose.connect('mongodb://127.0.0.1:27017/e-commerce_dashboard')
    console.log("connected"); 
}catch(err){
    console.log(err)
}

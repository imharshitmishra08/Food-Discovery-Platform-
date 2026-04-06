
const mongoose =  require('mongoose');




function connectDB() {
mongoose.connect(process.env.MONGODB_URI)
   .then(()=>{
    console.log("mongoDB connected successfully");
   })
   .catch((err)=>{
console.log("mongoDB connection failed : " , err);
   }) 
    
}

module.exports   =  connectDB;
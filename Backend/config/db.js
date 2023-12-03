const mongoose =require('mongoose')
const colors =require("colors")

const connectDB=async()=>{
    try {
     const conn=   await mongoose.connect(process.env.MONGO_URI)
     console.log(colors.rainbow(`Connected to MongoDB Database ${conn.connection.host}`));
    }catch(err){
        console.log(`Error in MongoDB ${err}.bgRed.white`);
    }
}

module.exports= connectDB;
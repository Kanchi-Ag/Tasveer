const mongoose=require('mongoose')
const {Schema}=mongoose;

const BookingSchema=new Schema({
    FromDate:{
        type:Date,
        required:true,
    },
    ToDate:{
        type:Date,
        required:true, 
    },
    FromTime:{
        type:Date,
        required:true,
    },
    ToTime:{
        type:Date,
        required:true,
    }

})

module.exports=mongoose.model("bookings",BookingSchema);
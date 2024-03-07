const mongoose = require("mongoose");

const contactSchema=mongoose.Schema({
    user_id:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:'users',
    },
    name:{
        type:String,
        required:[true,'please add the name'],
    },
    email:{
        type:String,
        required:[true,'please add the email']
    },
    phone:{
        type:String,
        required:[true,'please add the phone']
    },
    
},
{
    timestamps:true
}
);

module.exports=mongoose.model("Contact",contactSchema)
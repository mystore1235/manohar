const mongoose = require("mongoose");
const DB=' mongodb://127.0.0.1:27017/hello'
//data base connection
mongoose.connect(DB,{useNewUrlParser: true,useUnifiedTopology: true})
.then( ()=> console.log('connected'))
.catch((err)=> console.log('connection is failed......'));
//create schema and model
const database = new mongoose.Schema({
    username:{
        type:String,
        required: true
    },
    userpassword:{
        type:String,
        required: true
    },
    usercompassword:{
        type:String,
        required: true
    },
    usermobilenum:{
        type:Number,
        required: true
    },
    usergender:{
        type: String,
        required: true
    },
    userbookedservices:{
        type: String,
        required: true
    },
    userhomeservice:{
        type:Boolean,
        required: true
    },
    userappointmentdate:{
        type: String,
        required: true
    },
    userappointmenttime:{
        type: String,
        required: true
    },
    vendermobile:{
        type: Number,
        required: true
    },
    venderpassword:{
        type:String,
        required: true
    },
    reviews:{
        type:String
    },
    approval:{
        type:Boolean,
        required: true
    },
    rating:{
        type:Number
    },
    empmobile:{
        type:Number,
        required: true
    },
    emppassword:{
        type:String,
        required: true
    },
    userbookaddress:{
        type:String
    },
    empstatus:{
        type:Boolean,
        required: true
    },
    adminname:{
        type:String,
        required: true
    },
    adminpassword:{
        type: String,
        required: true
    }

})
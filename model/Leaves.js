const mongoose = require('mongoose')
const LeaveSchema = mongoose.Schema({
    type:{
        type:String,
        required:true
    },
    start:{
        type:Date,
        required:true
    },
    end:{
        type:Date,
        required:true
    }
})
const LeaveModel = mongoose.model('leave',LeaveSchema)
module.exports = LeaveModel
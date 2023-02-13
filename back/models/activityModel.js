const mongoose =  require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const Schema = mongoose.Schema

const activitySchema = new Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    activ:{
        type:String,
        required:true
    }, 
    coursID:{
       type:ObjectId,
       ref:"cours"
    }
},{timestamps:true})

module.exports = mongoose.model("activity",activitySchema)
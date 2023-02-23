const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const Schema = mongoose.Schema

const coursSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    categorie:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    postedBy:{
       type:ObjectId,
       ref:'Teacher'
    }
},{timestamps:true})

module.exports = mongoose.model("cours",coursSchema)
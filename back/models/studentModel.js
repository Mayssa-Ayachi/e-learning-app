const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  phonenumber: {
    type: String,
   
  },
  name: {
    type: String,
    
  },
  linkedin: {
    type: String,
    
  },
  university: {
    type: String,
    
  },
}, { timestamps: true })

module.exports = mongoose.model('Student', studentSchema)

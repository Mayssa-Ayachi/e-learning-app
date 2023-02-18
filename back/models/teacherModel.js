const mongoose = require('mongoose')

const Schema = mongoose.Schema

const teacherSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
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
  field: {
    type: String,
    
  },
}, { timestamps: true })

module.exports = mongoose.model('Teacher', teacherSchema)
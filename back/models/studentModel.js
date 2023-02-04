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
  }
}, { timestamps: true })

module.exports = mongoose.model('Student', studentSchema)

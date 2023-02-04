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
  }
}, { timestamps: true })

module.exports = mongoose.model('Teacher', teacherSchema)
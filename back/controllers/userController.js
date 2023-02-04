const Student = require('../models/studentModel')
const Teacher = require('../models/teacherModel')
const Admin = require('../models/adminModel')
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken')


const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// signup a user
const signupUser = async (req, res) => {
  const { email, password, role } = req.body

  try {
  // validation
  if (!email || !password) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  if (role == "student"){
    exists = await Student.findOne({ email })
  }else if (role == "teacher"){
    exists = await Teacher.findOne({ email })
  }else if (role == "admin"){
    exists = await Admin.findOne({ email })
  }
  
  if (exists) {
    throw Error('Email already in use')
  }
  
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  
  if (role == "student"){
    user = await Student.create({ email, password: hash })
  }else if (role == "teacher"){
    user = await Teacher.create({ email, password: hash })
  }else if (role == "admin"){
    user = await Admin.create({ email, password: hash })
  }

  // create a token
  const token = createToken(user._id)

  res.status(200).json({email, user, token})
 }catch (error) {
  res.status(400).json({error: error.message})
}
}

// login a user
const loginUser = async (req, res) => {
  const {email, password, role} = req.body

  try {
    if (!email || !password) {
      throw Error('All fields must be filled')
    }
  
    if (role == "student"){
      user = await Student.findOne({ email })
    }else if (role == "teacher"){
      user = await Teacher.findOne({ email })
    }else if (role == "admin"){
      user = await Admin.findOne({ email })
    }

    if (!user) {
      throw Error('Incorrect email')
    }
  
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      throw Error('Incorrect password')
    }
  
    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, user, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { signupUser, loginUser }
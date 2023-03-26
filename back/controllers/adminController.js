const Student = require('../models/studentModel')
const Teacher = require('../models/teacherModel')

const mongoose = require('mongoose')

// get all Users
const getUsers = async (req, res) => {
  // role of the required users
  const {userRole} = req.params

  if (userRole == "student"){
    users = await Student.find({}).sort({createdAt: -1})
  }else if (userRole == "teacher"){
    users = await Teacher.find({}).sort({createdAt: -1})
  }
  res.status(200).json(users)
} 


// get a single Student
const getStudent = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Student'})
  }

  const student = await Student.findById(id)

  if (!student) {
    return res.status(404).json({error: 'No such Student'})
  }

  res.status(200).json(student)
}

// delete a User
const deleteUser = async (req, res) => {
    const { id } = req.params
    console.log("back")
    console.log(id)

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such user'})
    }
    user = await Teacher.findOneAndDelete({_id: id})
    res.status(200).json(user)
}

// delete a Student
const deleteStudent = async (req, res) => {
  const { id } = req.params
  console.log("back")
  console.log(id)

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such user'})
  }
  user = await Student.findOneAndDelete({_id: id})
  res.status(200).json(user)
}

// update a Student
const updateStudent = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such student'})
    }
  
    const student = await Student.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!student) {
      return res.status(400).json({error: 'No such student'})
    }
  
    res.status(200).json(student)
}

module.exports = {
  getUsers,
  getStudent,
  deleteUser,
  deleteStudent,
  updateStudent,
}
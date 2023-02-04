const express = require('express')
const {
  getUsers, 
  getStudent, 
  deleteStudent, 
  updateStudent,
} = require('../controllers/adminController')

const router = express.Router()

// GET all Students
router.get('/', getUsers)

// GET a single Student
router.get('/:id', getStudent)

// DELETE a Student
router.delete('/:id', deleteStudent)

// UPDATE a Student
router.patch('/:id', updateStudent)

module.exports = router
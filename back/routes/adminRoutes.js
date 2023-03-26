const express = require('express')
const {
  getUsers, 
  getStudent, 
  deleteUser, 
  updateStudent,
} = require('../controllers/adminController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// GET all Students
router.get('/:userRole', getUsers)

// GET a single Student
router.get('/:id', getStudent)

// DELETE a Student
router.delete('/deleteuser', deleteUser)

// UPDATE a Student
router.patch('/:id', updateStudent)

module.exports = router
const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
  
  postProfile, getprofile, updateProfile
} = require('../controllers/teacherController')
   


// require auth for all workout routes
router.use(requireAuth)

// GET  profil
router.get('/profile', getprofile)

// Post activity
router.put('/create', updateProfile)

// GET a single Student
//router.get('/:id', getStudent)

// DELETE a Student
//router.delete('/:id', deleteStudent)

// UPDATE a Student
//router.patch('/:id', updateStudent)

module.exports = router
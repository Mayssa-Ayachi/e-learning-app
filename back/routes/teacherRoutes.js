const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
  
  postProfile, getprofile
} = require('../controllers/teacherController')
   


// require auth for all workout routes
//router.use(requireAuth)

// GET  profil
router.get('/profile', getprofile)

// Post activity
router.post('/create', postProfile)

// GET a single Student
//router.get('/:id', getStudent)

// DELETE a Student
//router.delete('/:id', deleteStudent)

// UPDATE a Student
//router.patch('/:id', updateStudent)

module.exports = router
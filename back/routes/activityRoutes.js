const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
  getActivities, 
  postActivity
} = require('../controllers/activityController')


// require auth for all workout routes
///router.use(requireAuth)

// GET all activities
router.get('/allactivities', getActivities)

// Post activity
router.post('/create', postActivity)

// GET a single Student
//router.get('/:id', getStudent)

// DELETE a Student
//router.delete('/:id', deleteStudent)

// UPDATE a Student
//router.patch('/:id', updateStudent)

module.exports = router
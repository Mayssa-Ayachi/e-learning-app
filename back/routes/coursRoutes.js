const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
  getCours, 
  postCours,
  getCoursesSearch,
  getCoursesStudent
} = require('../controllers/coursController')


// require auth for all workout routes
router.use(requireAuth)

// GET all activities
router.get('/allcourses', getCours)
router.get('/list', getCoursesSearch)
router.get('/listStudent', getCoursesStudent)


// Post activity
router.post('/create', postCours)

// GET a single Student
//router.get('/:id', getStudent)

// DELETE a Activity
//router.delete('/:id', deleteActivity)


module.exports = router
const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
  getActivities, 
  postActivity,
  deleteActivity,
  getCourseActivities
} = require('../controllers/activityController')


// require auth for all workout routes
router.use(requireAuth)

// GET all activities
router.get('/allactivities', getActivities)

// Post activity
router.post('/create', postActivity)

// GET course activities
router.get('/courseactivities/:course', getCourseActivities)

// DELETE a Activity
router.delete('/:id', deleteActivity)


module.exports = router
const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
  getActivities, 
  postActivity,
  deleteActivity,
  getCourseActivities,
  getCourseActivitiesSearch
} = require('../controllers/activityController')


// require auth for all workout routes
router.use(requireAuth)

// GET all activities
router.get('/allactivities', getActivities)

// Post activity
router.post('/create', postActivity)

// GET course activities
router.get('/courseactivities/:course', getCourseActivities)

router.get('/courseactivities/list/:course', getCourseActivitiesSearch)

// DELETE a Activity
router.delete('/:id', deleteActivity)


module.exports = router
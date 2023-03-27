const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

const {
   getprofile, updateProfile,updateMyCourses
} = require('../controllers/studentController')
   


// require auth for all workout routes
router.use(requireAuth)

// GET  profil
router.get('/profile', getprofile)

router.put('/create', updateProfile)
router.put('/addCourse/:course', updateMyCourses)



module.exports = router
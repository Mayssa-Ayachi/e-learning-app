require('dotenv').config()
const express = require ("express")
const mongoose = require('mongoose')
const app = express()
const adminRoutes = require('./routes/adminRoutes')
const userRoutes = require('./routes/userRoutes')
const activityRoutes = require('./routes/activityRoutes')
const coursRoutes = require('./routes/coursRoutes')
const teacherRoutes = require('./routes/teacherRoutes')

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })

// routes
app.use('/api/admin', adminRoutes)
app.use('/api/user', userRoutes)
app.use('/api/activity', activityRoutes)
app.use('/api/courses', coursRoutes)
app.use('/api/teacher', teacherRoutes)

// connect to db
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 
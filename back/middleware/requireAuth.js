const jwt = require('jsonwebtoken')
const admin = require('../models/adminModel')
const student= require('../models/studentModel')
const teacher = require('../models/teacherModel')

const requireAuth = async (req, res, next) => {
  // verify user is authenticated
  const { authorization,role } = req.headers


  if (!authorization) {
    return res.status(401).json({error: 'Authorization token required'})
  }

  console.log(req.user)

  const token = authorization.split(' ')[1]

  try {
    const { _id } = jwt.verify(token, process.env.SECRET)

    //req.user_role is the role of the current user
    //req.user is the id of the current user

    if(role=="admin"){
        req.user = await admin.findOne({ _id }).select('_id')  
    }else if(role=="student"){
        req.user = await student.findOne({ _id }).select('_id')   
    }else if(role=="teacher"){
        req.user = await teacher.findOne({ _id }).select('_id')
    }
    console.log(req.user)

    if(!req.user){
      throw Error("Role and Id are not compatible")
    }else{
      next()
    }

  } catch (error) {
    console.log(error)
    res.status(401).json({error: 'Request is not authorized'})
  }
}

module.exports = requireAuth
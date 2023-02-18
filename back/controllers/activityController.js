const activity =  require('../models/activityModel')
const mongoose = require('mongoose')

// get all Activities
const getActivities = async (req,res) =>{
    try{
        const Activities = await activity.find({}).sort({createdAt: -1})
        res.status(200).json(Activities)
    }catch(error){
        res.status(400).json({error: error.message})
    }    
}

// get course Activities
const getCourseActivities = async (req,res) =>{
    const { course } = req.params

    /*if (!mongoose.Types.ObjectId.isValid(course)) {
        return res.status(404).json({error: 'No such Course'})
      }*/

    try{
        const Activities = await activity.find({coursID:course}).sort({createdAt: -1})
        res.status(200).json(Activities)
    }catch(error){
        res.status(400).json({error: error.message})
    }    
}
    
// create Activity
const postActivity = async (req, res) => {
    const {title,body,activ,coursID} = req.body 

    try {
        req.user.password = undefined

        const activityy = await activity.create({title,body,activ,coursID})
        res.status(200).json(activityy)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// delete Activity

const deleteActivity = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such Activity'})
    }
  
    const Activity = await activity.findOneAndDelete({_id: id})
  
    if(!Activity) {
      return res.status(400).json({error: 'No such Activity'})
    }
  
    res.status(200).json(Activity)
}

module.exports = { getActivities,postActivity,deleteActivity,getCourseActivities }
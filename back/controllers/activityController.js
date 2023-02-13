const requireAuth = require('../middleware/requireAuth')
const activity =  require('../models/activityModel')


const getActivities = async (req,res) =>{
    try{
        const Activities = await activity.find({}).sort({createdAt: -1})
        res.status(200).json(Activities)
    }catch(error){
        res.status(400).json({error: error.message})
    }    
}
    

const postActivity = async (req, res) => {
    const {title,body,activ,coursID} = req.body 
    console.log("ggg")
    try {
        if(!title || !body || !activ || !coursID){
            console.log("Please add all the fields")
            return res.status(422).json({error:"Please add all the fields"})
        }
        req.user.password = undefined
        const activityy = await activity.create({title,body,activ,coursID})
        res.status(200).json(activityy)
        console.log("ff")
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = { getActivities,postActivity }
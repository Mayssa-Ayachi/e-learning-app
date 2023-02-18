const Cours =  require('../models/coursModel')
const mongoose = require('mongoose')

// get all Cours
const getCours = async (req,res) =>{
    const postedBy=req.user

    if (!mongoose.Types.ObjectId.isValid(postedBy)) {
        return res.status(404).json({error: 'No such Course'})
      }

    try{
        const cours = await Cours.find({postedBy:postedBy}).sort({createdAt: -1})
        res.status(200).json(cours)
    }catch(error){
        res.status(400).json({error: error.message})
    }    
}
    
// create Activity
const postCours = async (req, res) => {
    const {title,categorie,body,url} = req.body 
    const postedBy=req.user
    try {
        req.user.password = undefined

        const cours = await Cours.create({title,categorie,body,url,postedBy})
        res.status(200).json(cours)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// delete Activity

/*const deleteActivity = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such Activity'})
    }
  
    const Activity = await activity.findOneAndDelete({_id: id})
  
    if(!Activity) {
      return res.status(400).json({error: 'No such Activity'})
    }
  
    res.status(200).json(Activity)
}*/

module.exports = { getCours,postCours }
const Cours =  require('../models/coursModel')

// get all Cours
const getCours = async (req,res) =>{
    try{
        console.log("hii")
        const cours = await Cours.find({}).sort({createdAt: -1})
        res.status(200).json(cours)
    }catch(error){
        res.status(400).json({error: error.message})
    }    
}
    
// create Activity
const postCours = async (req, res) => {
    const {title,body,url,postedBy} = req.body 
    
    try {
        //req.user.password = undefined

        const cours = await Cours.create({title,body,url,postedBy})
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
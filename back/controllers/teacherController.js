
const requireAuth = require('../middleware/requireAuth')
const Teacher =  require('../models/teacherModel')

const getprofile = async (req,res) =>{
    Teacher.findOne({_id:req.params.id})
    .select("-password")
    .then(Teacher=>{
         profil.find({postedBy:req.params.id})
         
         .exec((err,profil)=>{
             if(err){
                 return res.status(422).json({error:err})
             }
             res.json({Teacher,profil})
         })
    }).catch(err=>{
        return res.status(404).json({error:"User not found"})
    })
}

    

const postProfile = async (req, res) => {
    const {name,phonenumber,linkedin,university,field} = req.body 

    try {
        if(!name || !phonenumber || !linkedin || !university  || !field){
            throw Error("Please add all the fields")
        }
        //req.user.password = undefined

        const profil = await Teacher.create({name,phonenumber,linkedin,university,field})
        res.status(200).json(profil)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = { postProfile, getprofile }
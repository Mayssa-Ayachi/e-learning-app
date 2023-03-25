const Teacher =  require('../models/teacherModel')

const getprofile = async (req,res) =>{
    try{
        const teacher = await Teacher.findById(req.user).select("-password");
        res.status(200).json(teacher)
        console.log(teacher)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

    
// hedhi nbadloha
const updateProfile = async (req, res) => {
    const { name, phonenumber, linkedin, university, field  } = req.body;
    const id = req.user;
    try {
      if (!name || !phonenumber || !linkedin || !university || !field) {
        throw Error("Please add all the fields");
      }
  
      const teacher = await Teacher.findOneAndUpdate(
        { _id: id },
        { name, phonenumber, linkedin, university, field },
        { new: true }
      ).select("-password");
  
      if (!teacher) {
        return res.status(404).json({ error: "User not found" });
      }
  
      res.status(200).json(teacher);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports = { updateProfile, getprofile }
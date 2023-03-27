const Student =  require('../models/studentModel')
const mongoose = require('mongoose')

const getprofile = async (req,res) =>{
    try{
        const student = await Student.findById(req.user).select("-password");
        
        res.status(200).json(student)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

const updateProfile = async (req, res) => {
    const { name, phonenumber, linkedin, university, field  } = req.body;
    const id = req.user;
    try {
      const student = await Student.findOneAndUpdate(
        { _id: id },
        { name, phonenumber, linkedin, university, field },
        { new: true }
      ).select("-password");
  
      if (!student) {
        return res.status(404).json({ error: "User not found" });
      }
  
      res.status(200).json(student);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


  const updateMyCourses = async (req,res) =>{
    const { course } = req.params
    const id = req.user;

    if (!mongoose.Types.ObjectId.isValid(course)) {
        return res.status(404).json({error: 'No such Course'})
    }

    try{
      const student = await Student.findOneAndUpdate(
        { _id: id },
        { $addToSet: { mycourses: course } },
        { new: true },
      ).select("-password");

      if (!student) {
        return res.status(404).message({ error: "Student not found" });
      }
      
      res.status(200).json(student);
      console.log("enaaaaaaaaaaaaaaaaaa")
      console.log(student.mycourses)
      console.log("khdeeeeeeeeeeeeemttt")

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports = {updateProfile, getprofile, updateMyCourses }
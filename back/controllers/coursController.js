const Cours =  require('../models/coursModel')
const Student =  require('../models/studentModel')
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

const getCoursesSearch = async (req, res) => {
    const postedBy=req.user
    console.log(postedBy)
    console.log(req.headers.role)
    if (!mongoose.Types.ObjectId.isValid(postedBy) || req.headers.role!="teacher") {
        return res.status(404).json({error: 'No such teacher'})
    }

    try {
      const { q } = req.query;
      const keys = ["title","categorie","body"];
      const allcourses= await Cours.find({postedBy:postedBy}).sort({createdAt: -1})

      const search = (data) => {
        return data.filter((item) =>
          keys.some((key) => item[key].toString().toLowerCase().includes(q))
        );
      };

      q ? res.json(search(allcourses)) : res.json(allcourses);
      console.log(res.json)
      console.log("kkkkkkkkkkkkkkkkkk")
    } catch (err) {
      console.error(err.message);
    }
  };

//Studenttttttttttttt
//get all courses from all teacherss
  const getCoursesStudent = async (req, res) => {
    const postedBy=req.user
    if ((!mongoose.Types.ObjectId.isValid(postedBy)) || (req.headers.role!="student")) {
        return res.status(404).json({error: 'No such student'})
    }

    try {
      const { q } = req.query;
      const keys = ["title","categorie","body"];
      const allcourses= await Cours.find().sort({createdAt: -1})
      const search = (data) => {
        return data.filter((item) =>
          keys.some((key) => item[key].toString().toLowerCase().includes(q))
        );
      };

      q ? res.json(search(allcourses)) : res.json(allcourses);
    } catch (err) {
      console.error(err.message);
    }
  };
//get courses of one student
const myCourses = async (req, res) => {
  const myId=req.user//contains objectId of student

  if ((!mongoose.Types.ObjectId.isValid(myId)) || (req.headers.role!="student")) {
      return res.status(404).json({error: 'No such student'})
  }

  try {
    const { q } = req.query;
    const keys = ["title","categorie","body"];
    const student= await Student.findOne({ _id: myId },'mycourses')
    const studentCoursessId=student.mycourses
    console.log(studentCoursessId)

    const studentCoursess = [];

    // Loop through each ObjectId and query the database for the corresponding course
    for (const courseId of studentCoursessId) {
    // courseId will be an ObjectId, e.g. ObjectId("6420c8d28639814f4eea434d")
  
    // Query the database for the course using the courseId and push it into the allcourses array
    const course = await Cours.findOne({ _id: courseId });
    studentCoursess.push(course);
    }
    console.log("hiiiiiiiiiiiiiii")
    console.log(studentCoursess)

    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toString().toLowerCase().includes(q))
      );
    };

    q ? res.json(search(studentCoursess)) : res.json(studentCoursess);
  } catch (err) {
    console.error(err.message);
  }
}; 
    








// create Course
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

module.exports = { getCours,postCours,getCoursesSearch,getCoursesStudent,myCourses }
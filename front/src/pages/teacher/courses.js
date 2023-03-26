import { useEffect, useState } from "react"
import { useAuthContext } from "../../hooks/useAuthContext"



// components
import CoursDetails from "../../components/coursDetails"
import AjoutCours from "../../components/ajouterCours";
import CoursSearch from "../../components/CoursSearch";
  const TeacherCourses = () => {
  const [cours, setCours] = useState(null)
  const [query, setQuery] = useState("");

  const {user} = useAuthContext()


  const getCoursesSearch = async () => {
    const fetchCourss = async () => {
      try{
      const response = await fetch(`/api/courses/list/?q=${query}`, {
        headers: {'Authorization': `Bearer ${user.token}`,
        'Role':`${user.role}`}
      })
      const json = await response.json()
        setCours(json)
      }catch(err){
        console.error(err.message)
      }
    }

    if (user) {
      fetchCourss()
    }
  };



  useEffect(() => {
    getCoursesSearch();
  }, [user, query])

  return (
    <>
    <div className="home">
      <div className="rechercheajout">
    <AjoutCours />
    <CoursSearch setQuery={(e) => setQuery(e)} /></div>
      <div className="coursactivites">

        {cours && cours.map(cours => (
          <CoursDetails cours={cours} key={cours._id} />
        ))}
      </div>
    </div>
    </>
  )
}

export default TeacherCourses
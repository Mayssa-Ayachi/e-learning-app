import { useEffect, useState } from "react"
import { useAuthContext } from "../../hooks/useAuthContext"


// components
import CoursDetails from "../../components/coursDetails"
import CoursSearch from "../../components/CoursSearch"

  const MyCourses = () => {

  const [cours, setCours] = useState(null)
  const [query, setQuery] = useState("");

  const {user} = useAuthContext()


  const getMyCourses = async () => {
    
    const fetchCourss = async () => {
        console.log("pssssst")
        console.log(user)

      try{
      const response = await fetch(`/api/courses/mycourses/?q=${query}`, {
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
    getMyCourses();
  }, [user, query])

  return (
    <>
    <div className="home">
      <div className="rechercheajout">
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

export default MyCourses
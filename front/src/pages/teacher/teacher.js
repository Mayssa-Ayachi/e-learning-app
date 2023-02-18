import { useEffect, useState } from "react"
import { useAuthContext } from "../../hooks/useAuthContext"


// components
import CoursDetails from "../../components/cours"
import AjoutCours from "../../components/ajouterCours";

  const TeacherActivities = () => {
  const [cours, setCours] = useState(null)
  const {user} = useAuthContext()


  useEffect(() => {
    
    const fetchCours = async () => {
      const response = await fetch('/api/courses/allcourses', {
        headers: {'Authorization': `Bearer ${user.token}`,
        'Role':`${user.role}`}
      })
      const json = await response.json()

      if (response.ok) {
        setCours(json)
      }
    }

    if (user) {
      fetchCours()
    }
  }, [user])


  return (
    <>
    <div className="home">
    <AjoutCours />
      <div className="workouts">

        {cours && cours.map(cours => (
          <CoursDetails cours={cours} key={cours._id} />
        ))}
      </div>
    </div>
    </>
  )
}

export default TeacherActivities
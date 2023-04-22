import { useEffect, useState } from "react"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useActivityContext } from "../../hooks/useActivityContext"
import AjoutActivite from "../../components/ajouteractivite";
import AjoutCours from "../../components/ajouterToCourses";
import CoursSearch from "../../components/CoursSearch";

// components
import ActivityDetails from "../../components/activitiesDetails"

  const TeacherActivities = () => {
  const [activities, setActivities] = useState(null)
  const [query, setQuery] = useState("");
  const {user} = useAuthContext()
  const {coursID} = useActivityContext()


  useEffect(() => {
    //console.log(coursID)
    const fetchActivites = async () => {
      try{
      const response = await fetch(`/api/activity/courseactivities/list/`+coursID+`?q=${query}`, {
        method: 'GET',
        headers: {'Authorization': `Bearer ${user.token}`,
        'Role':`${user.role}`}
      })
      const json = await response.json()

      if (response.ok) {
        setActivities(json)
      }
    }catch(err){
      console.error(err.message)
    }}

    if (user) {
      fetchActivites()
    }
  }, [user,query,coursID])


  return (
    <div className="home">
      <div className="rechercheajout" >
      {user.role==="student" && <AjoutCours />}
    
      
      {user.role==="teacher" && <AjoutActivite />}
      <CoursSearch setQuery={(e) => setQuery(e)} />
      </div>
      <div className="coursactivites">
        {activities && activities.map(activity => (
          <ActivityDetails navigation activity={activity} key={activity._id} />
        ))}
      </div>
    </div>
  )
}

export default TeacherActivities
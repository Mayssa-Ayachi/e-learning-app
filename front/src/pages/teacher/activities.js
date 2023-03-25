import { useEffect, useState } from "react"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useActivityContext } from "../../hooks/useActivityContext"
import AjoutActivite from "../../components/ajouteractivite";

// components
import ActivityDetails from "../../components/activitiesDetails"

  const TeacherActivities = () => {
  const [activities, setActivities] = useState(null)
  const {user} = useAuthContext()
  const {coursID} = useActivityContext()


  useEffect(() => {
    console.log(coursID)
    const fetchActivites = async () => {
      const response = await fetch('/api/activity/courseactivities/'+coursID, {
        method: 'GET',
        headers: {'Authorization': `Bearer ${user.token}`,
        'Role':`${user.role}`}
      })
      const json = await response.json()

      if (response.ok) {
        setActivities(json)
      }
    }

    if (user) {
      fetchActivites()
    }
  }, [user,coursID])


  return (
    <div className="home">
      <AjoutActivite />
      <div className="coursactivites">
        {activities && activities.map(activity => (
          <ActivityDetails navigation activity={activity} key={activity._id} />
        ))}
      </div>
    </div>
  )
}

export default TeacherActivities
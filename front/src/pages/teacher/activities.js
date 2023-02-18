import { useEffect, useState } from "react"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useActivityContext } from "../../hooks/useActivityContext"

// components
import ActivityDetails from "../../components/activities"

  const TeacherActivities = () => {
  const [activities, setActivities] = useState(null)
  //const [coursID,setcoursID] = useState("63ea8f4ad56e9cdb6decfb63")
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
      <div className="workouts">
        {activities && activities.map(activity => (
          <ActivityDetails activity={activity} key={activity._id} />
        ))}
      </div>
    </div>
  )
}

export default TeacherActivities
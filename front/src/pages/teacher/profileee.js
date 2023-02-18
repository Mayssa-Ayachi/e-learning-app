import { useEffect, useState } from "react"
import { useAuthContext } from "../../hooks/useAuthContext"


// components

import AjoutInfo from "../../components/ajouterinfo";
import TeacherDetails from "../../components/profile";

  const TeacherStats = () => {
  const [profil, setProfil] = useState(null)
  const {user} = useAuthContext()


  useEffect(() => {
    
    const fetchProfile = async () => {
      const response = await fetch('/api/teacher/profile/', {
        headers: {'Authorization': `Bearer ${user.token}`,
        'Role':`${user.role}`}
      })
      const json = await response.json()

      if (response.ok) {
        setProfil(json)
      }
    }

    if (user) {
      fetchProfile()
    }
  }, [user])


  return (
    <>
    <div className="home">
    <AjoutInfo />
      <div className="workouts">

        { profile  => (
          <TeacherDetails profile={profil} key={profile._id} />
        ) }
      </div>
    </div>
    </>
  )
}

export default TeacherStats
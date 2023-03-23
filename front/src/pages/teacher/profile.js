import { useEffect, useState } from "react"
import { useAuthContext } from "../../hooks/useAuthContext"


// components

import AjoutInfo from "../../components/ajouterinfo";
import TeacherDetails from "../../components/profile";

  const TeacherProfile = () => {
  const [profile, setProfil] = useState(null)
  const {user} = useAuthContext()


  useEffect(() => {
    
    const fetchProfile = async () => {
      const response = await fetch('/api/teacher/profile/', {
        method: 'GET',
        headers: {'Authorization': `Bearer ${user.token}`,
        'Role':`${user.role}`}
      })
      const json = await response.json()
      setProfil(json)
    }
    if (user) {
      fetchProfile()
    }
  }, [user])


  return (
    <>
    <div className="home">
    <AjoutInfo />
      <div>
      { (profile && <TeacherDetails profile={profile} key={profile._id}  />) }
      </div>
    </div>
    </>
  )
}

export default TeacherProfile

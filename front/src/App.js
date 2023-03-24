import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Admin from './pages/admin/admin'
import Student from './pages/student/student'
import TeacherCourses from './pages/teacher/courses'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import Navbaar from './components/navbar'
import TeacherActivities from './pages/teacher/activities'
import TeacherProfile from './pages/teacher/profile'
import TeacherNavbar from './components/teacherNavbar'

function App() {
  
  const { user } = useAuthContext()
  const { role } = {...user}

  return (
    <div className="App">
    <BrowserRouter>
    <Navbaar />
       
      <div className="pages">
        <Routes>
          <Route 
              path="/"
              element={<Navigate to="/Login" />}
          />
          <Route 
            path="/login" 
            element={!user ? <Login /> : role==="teacher"? <Navigate to="/teacherProfile"/>
            : role==="student" ? <Navigate to="/student"/> : <Navigate to="/admin"/> }
          />
          <Route 
            path="/signup" 
            element={!user ? <Signup /> : role==="teacher"? <Navigate to="/teacherProfile"/>
            : role==="student" ? <Navigate to="/student"/> : <Navigate to="/admin"/> }
          />

          <Route 
            path="/teacherProfile"
            element={role==="teacher"? <TeacherProfile/> : <Navigate to="/Login" />}
          />

          <Route 
            path="/teacherActivities"
            element={ <TeacherActivities/> }
           />

          <Route 
            path="/teacherCourses"
            element={ <TeacherCourses/> }
            /*element={role==="teacher"? <TeacherCourses/> : <Navigate to="/Login" />}*/
          />

          <Route 
            path="/admin"
            element={role==="admin"? <Admin/> : <Navigate to="/Login" />}
          />
          <Route 
            path="/student"
            element={role==="student"? <Student/> : <Navigate to="/Login" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;

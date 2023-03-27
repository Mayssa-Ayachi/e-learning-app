import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
// pages & components
import Admin from './pages/admin/admin'
import TeacherCourses from './pages/teacher/courses'
import StudentCourses from './pages/student/courses'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import Navbaar from './components/navbar'
import TeacherActivities from './pages/teacher/activities'
import TeacherProfilePage from './components/profile'
import StudentProfile from './components/profileStudent'
import ActivityViewer from './pages/teacher/viewActivity'

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
            : role==="student" ? <Navigate to="/studentProfile"/> : <Navigate to="/admin"/> }
          />
          <Route 
            path="/signup" 
            element={!user ? <Signup /> : role==="teacher"? <Navigate to="/teacherProfile"/>
            : role==="student" ? <Navigate to="/studentProfile"/> : <Navigate to="/admin"/> }
          />

          <Route 
            path="/teacherProfile"
            element={<TeacherProfilePage tea={user}/>}
          />

          <Route 
            path="/studentProfile"
            element={role==="student"? <StudentProfile stu={user}/> : <Navigate to="/Login" />}
          />

          <Route 
            path="/courseActivities"
            element={ <TeacherActivities/> }
           />

          <Route 
            path="/teacherCourses"
            element={ <TeacherCourses/> }
            /*element={role==="teacher"? <TeacherCourses/> : <Navigate to="/Login" />}*/
          />

          <Route 
            path="/allCourses"
            element={ <StudentCourses/> }
            /*element={role==="teacher"? <TeacherCourses/> : <Navigate to="/Login" />}*/
          />


<         Route 
            path="/viewActivity"
            element={ <ActivityViewer/> }
            /*element={role==="teacher"? <TeacherCourses/> : <Navigate to="/Login" />}*/
          />
          <Route 
            path="/admin"
            element={role==="admin"? <Admin/> : <Navigate to="/Login" />}
          />
          
        </Routes>
      </div>
    </BrowserRouter>
  </div> 
  );
}

export default App;

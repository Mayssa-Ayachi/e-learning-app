import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
// pages & components
import TeacherCourses from './pages/teacher/courses'
import StudentCourses from './pages/student/courses'
import MyCourses from './pages/student/myCourses'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import Navbaar from './components/navbar'
import TeacherActivities from './pages/teacher/activities'
import TeacherProfilePagee from './components/profile'
import StudentsList from './pages/admin/studentList'
import TeachersList from './pages/admin/teachersList'
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
            : role==="student" ? <Navigate to="/studentProfile"/> : <Navigate to="/teachersList"/> }
          />
          <Route 
            path="/signup" 
            element={!user ? <Signup /> : role==="teacher"? <Navigate to="/teacherProfile"/>
            : role==="student" ? <Navigate to="/studentProfile"/> : <Navigate to="/teachersList"/> }
          />
          
          <Route
            path="/studentProfile"
            element={!user ? <Login /> : role==="student"? <StudentProfile stu={user}/> : <Navigate to="/Login" />}
          />

          <Route 
            path="/allCourses"
            element={!user ? <Login /> : role==="student"? <StudentCourses/> : <Navigate to="/Login" />}
          />

          <Route 
            path="/studentCourses"
            element={!user ? <Login /> : role==="student"? <MyCourses/> : <Navigate to="/Login" />}
          />

          <Route 
            path="/teacherProfile"
            element={!user ? <Login /> : role==="teacher"? <TeacherProfilePagee tea={user}/> : <Navigate to="/Login" />}            
          />

          <Route 
            path="/teacherCourses"
            element={!user ? <Login /> : role==="teacher"? <TeacherCourses/> : <Navigate to="/Login" />}
          />

          <Route 
            path="/courseActivities"
            element={!user ? <Login /> : (role==="teacher" || role==="student")? <TeacherActivities/> : <Navigate to="/Login" />}
           />

          <Route 
            path="/viewActivity"
            element={!user ? <Login /> : (role==="teacher" || role==="student")? <ActivityViewer/> : <Navigate to="/Login" />}
          />

          <Route 
            path="/teachersList"
            element={!user ? <Login /> : role==="admin"? <TeachersList/> : <Navigate to="/Login" />}
          />
          <Route 
            path="/studentsList"
            element={!user ? <Login /> : role==="admin"? <StudentsList/> : <Navigate to="/Login" />}
          />

        </Routes>
      </div>
    </BrowserRouter>
  </div> 
  );
}

export default App;

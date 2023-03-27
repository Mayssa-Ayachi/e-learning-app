import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
// pages & components
import Student from './pages/student/student'
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
            element={<StudentProfile stu={user}/> }
          />

          <Route 
            path="/courseActivities"
            element={!user ? <Login /> : role==="teacher"? <TeacherActivities/> : <Navigate to="/Login" />}
           />

          <Route 
            path="/allCourses"
            element={<StudentCourses/>}
          />

          <Route 
            path="/studentCourses"
            element={<MyCourses/> }
          />

          <Route 
            path="/teacherProfile"
            element={!user ? <Login /> : role==="teacher"? <TeacherProfilePagee tea={user}/> : <Navigate to="/Login" />}            
          />

          <Route 
            path="/teacherCourses"
            /*element={ <TeacherCourses/> }*/
            element={!user ? <Login /> : role==="teacher"? <TeacherCourses/> : <Navigate to="/Login" />}
          />

          <Route 
            path="/teachersList"
            element={!user ? <Login /> : role==="admin"? <TeachersList/> : <Navigate to="/Login" />}
          />
          <Route 
            path="/studentsList"
            element={!user ? <Login /> : role==="admin"? <StudentsList/> : <Navigate to="/Login" />}
          />

          <Route 
            path="/student"
            element={!user ? <Login /> : role==="student"? <Student/> : <Navigate to="/Login" />}
          />

          <Route 
            path="/viewActivity"
            /*element={ <ActivityViewer/> }*/
            element={!user ? <Login /> : role==="teacher"? <ActivityViewer/> : <Navigate to="/Login" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  </div> 
  );
}

export default App;

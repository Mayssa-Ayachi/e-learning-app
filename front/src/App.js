import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Admin from './pages/admin/admin'
import Student from './pages/student/student'
import Teacher from './pages/teacher/teacher'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import Navbaar from './components/navbar'
import TeacherStats from './pages/teacher/profileee'

function App() {
  
  const { user } = useAuthContext()
  const { role } = {...user}
  console.log(role)

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
            path="/admin"
            element={role==="admin"? <Admin/> : <Navigate to="/Login" />}
          />
          <Route 
            path="/student"
            element={role==="student"? <Student/> : <Navigate to="/Login" />}
          />
          <Route 
            path="/teacher"
            /*element={<Teacher/>}*/
            element={role==="teacher"? <Teacher/> : <Navigate to="/Login" />}
          />
          <Route 
            path="/login" 
            element={!user ? <Login /> : role==="teacher"? <Navigate to="/teacher"/>
            : role==="student" ? <Navigate to="/student"/> : <Navigate to="/admin"/> }
          />
          <Route 
            path="/signup" 
            element={!user ? <Signup /> : role==="teacher"? <Navigate to="/teacher"/>
            : role==="student" ? <Navigate to="/student"/> : <Navigate to="/admin"/> }
          />
                    <Route 
            path="/TeacherStats" 
            element={ <TeacherStats/>
             }
          />
          
        </Routes>
        
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;

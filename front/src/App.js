import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Admin from './pages/admin/admin'
import Student from './pages/student/student'
import Teacher from './pages/teacher/teacher'
import Login from './pages/login/login'
import Home from './pages/home/home'
import Signup from './pages/signup/signup'
import Navbaar from './components/navbar'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbaar />
      <div className="pages">
        <Routes>
          <Route 
              path="/"
              element={<Home />}
          />
          <Route 
            path="/admin"
            element={<Admin />}
          />
          <Route 
            path="/student"
            element={<Student />}
          />
          <Route 
            path="/teacher"
            element={<Teacher />}
          />
          <Route 
            path="/login" 
            element={<Login />} 
          />
          <Route 
            path="/signup" 
            element={<Signup />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;

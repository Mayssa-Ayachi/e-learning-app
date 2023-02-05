import React from "react";
import HomeEtu from "./etudiant/HomeEtu";
import ListCourse from "./etudiant/ListCourse";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
            <Route path="/" element={<HomeEtu />} />
            <Route path="ListCourse" element={<ListCourse />} />
    </Routes>
    </BrowserRouter>
    );
}

export default App;

import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProjectManager from "./components/ProjectManager"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/projectManager' element={<ProjectManager />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

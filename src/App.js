import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProjectManager from "./components/ProjectManager"
import HumanResources from "./components/HumanResources"
import Dashboard from "./components/Dashboard"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/projectManager' element={<ProjectManager />} />
        <Route path='/humanResources' element={<HumanResources />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

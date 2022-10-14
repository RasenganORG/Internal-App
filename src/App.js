import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProjectManager from "./components/ProjectManager"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h1>This is the container!</h1>
      </div>
      <Routes>
        <Route path='/projectManager' element={ProjectManager} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

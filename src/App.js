import React, { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Progress from "./components/Progress"
import Dashboard from "./components/Dashboard"
import "./App.css"

const ProjectManagerLazy = lazy(() => import("./components/ProjectManager"))
const HumanResourcesLazy = lazy(() => import("./components/HumanResources"))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Progress />}>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/projectManager' element={<ProjectManagerLazy />} />
          <Route path='/humanResources' element={<HumanResourcesLazy />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App

import React, { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Progress from "./components/Progress"
import Dashboard from "./components/Dashboard"
import Header from "./components/Header"
import "./App.css"

const ProjectManagerLazy = lazy(() => import("./components/ProjectManager"))
const HumanResourcesLazy = lazy(() => import("./components/HumanResources"))

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Suspense fallback={<Progress />}>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/projectManager/*' element={<ProjectManagerLazy />} />
            <Route path='/humanResources/*' element={<HumanResourcesLazy />} />
            <Route path='*' element={<h1>nu stiu boss</h1>} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App

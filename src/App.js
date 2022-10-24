import React, { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Progress from "./components/Progress"
import Dashboard from "./components/Dashboard"
import Header from "./components/Header"
import "./App.css"

const ProjectManagerLazy = lazy(() => import("./components/ProjectManager"))
const HumanResourcesLazy = lazy(() => import("./components/HumanResources"))
const LoginLazy = lazy(() => import("./components/Login"))

function App() {
  return (
    <BrowserRouter>
      <div>
        <Suspense fallback={<Progress />}>
          <Routes>
            <Route path='/' element={<Dashboard />}>
              <Route index element={<Header />} />
              <Route path='/pm/*' element={<ProjectManagerLazy />} />
              <Route path='/hr/*' element={<HumanResourcesLazy />} />
              <Route path='/login' element={<LoginLazy />} />
            </Route>
            <Route
              path='*'
              element={<h1>404 internii nu au gasit pagina</h1>}
            />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App

import React, { lazy, Suspense, useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Progress from "./components/Progress"
import Dashboard from "./components/Dashboard"
import Header from "./components/Header"
import "./App.css"

const ProjectManagerLazy = lazy(() => import("./components/ProjectManager"))
const HumanResourcesLazy = lazy(() => import("./components/HumanResources"))
const LoginLazy = lazy(() => import("./components/Login"))
const RegisterLazy = lazy(() => import("./components/Register"))

function App() {
  // const user = localStorage.getItem("user")
  const [user, setUser] = useState(null)
  useEffect(() => {
    const userInLocalStorage = localStorage.getItem("user")
    userInLocalStorage ? setUser(JSON.parse(userInLocalStorage)) : ''
  }, [])
  return (
    <BrowserRouter>
      <div>
        <Suspense fallback={<Progress />}>
          <Routes>
            <Route path='/' element={<Dashboard user={user} />}>
              <Route index element={<Header />} />
              <Route path='/pm/*' element={<ProjectManagerLazy />} />
              <Route path='/hr/*' element={<HumanResourcesLazy />} />
              <Route path='/login' element={<LoginLazy setUser={setUser} />} />
              <Route path='/register' element={<RegisterLazy setUser={setUser} />} />
            </Route>
            <Route path='*' element={<h1>404 internii nu au gasit pagina</h1>} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App

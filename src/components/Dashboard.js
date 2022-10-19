import React from "react"
import { Outlet, useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate()
  return (
    <div>
      <div>Dashboard</div>
      <button onClick={() => navigate("/projectManager")}>PM</button>
      <button onClick={() => navigate("/humanResources")}>HR</button>
      {/* <Outlet /> */}
    </div>
  )
}

export default Dashboard

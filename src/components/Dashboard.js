import React from "react"
import { Outlet, useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate()
  return (
    <div>
      <div>Dashboard</div>
      <button onClick={() => navigate("/pm")}>PM</button>
      <button onClick={() => navigate("/hr")}>HR</button>
    </div>
  )
}

export default Dashboard

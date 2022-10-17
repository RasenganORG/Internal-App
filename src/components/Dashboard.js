import React from "react"
import { useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate()
  return (
    <div>
      <div>Dashboard</div>
      <button onClick={() => navigate("/projectManager")}>PM</button>
      <button onClick={() => navigate("/humanResources")}>HR</button>
    </div>
  )
}

export default Dashboard

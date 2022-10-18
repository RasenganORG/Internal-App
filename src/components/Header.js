import React from "react"
import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate()
  return <button onClick={() => navigate("/")}>Dashboard</button>
}

export default Header

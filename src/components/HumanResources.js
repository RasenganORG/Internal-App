import React from "react"
import { useNavigate } from "react-router-dom"

function HumanResources() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>HR</h1>
      <button onClick={() => navigate("/humanResources/hey")}>hey</button>
      <button onClick={() => navigate("/humanResources/1")}>1</button>
    </div>
  )
}

export default HumanResources

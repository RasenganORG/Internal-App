// import React from "react"
// import { useNavigate } from "react-router-dom"

// function HumanResources() {
//   const navigate = useNavigate()
//   return (
//     <div>
//       <h1>HR</h1>
//       <button onClick={() => navigate("/humanResources/hey")}>hey</button>
//       <button onClick={() => navigate("/humanResources/1")}>1</button>
//     </div>
//   )
// }

// export default HumanResources
import React, { useEffect, useRef } from "react"
import { mount } from "humanResources/HumanResourcesApp"

function HumanResources() {
  const ref = useRef(null)
  console.log(mount)

  useEffect(() => {
    mount(ref.current)
  }, [])
  return <div ref={ref} />
}

export default HumanResources

import React, { useEffect, useRef } from "react"
import { mount } from "pm/ProjectManagerApp"

function ProjectManager() {
  const ref = useRef(null)
  console.log(mount)

  useEffect(() => {
    mount(ref.current)
  }, [])
  return <div ref={ref} />
}

export default ProjectManager

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

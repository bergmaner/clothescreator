import { useEffect, useState } from "react"

const useMousePosition = (resize,resizeRef) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clickSpace, setClickSpace] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const setFromEvent = (e) => {
      if(resize)setPosition({
          x: e.clientX - clickSpace?.x,
          y: e.clientY - clickSpace?.y,
        })
    }
    const handleMouseDown = e => {
      setClickSpace({ x:e.clientX, y:e.clientY})
    }
    window.addEventListener("mousemove", setFromEvent)
    resizeRef.current.addEventListener("mousedown", handleMouseDown)
    return () => {
      window.removeEventListener("mousemove", setFromEvent)
    }
  }, [resize])
  return position
}
export default useMousePosition
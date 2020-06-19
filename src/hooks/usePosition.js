import { useEffect, useState } from "react"

const usePosition = ref => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const setFromEvent = e => {
      if (e.clientX > ref?.current.getBoundingClientRect()?.left && e.clientX < ref?.current.getBoundingClientRect()?.right && e.clientY > ref?.current?.getBoundingClientRect()?.top && e.clientY < ref?.current?.getBoundingClientRect()?.bottom) {
        setPosition({
          x: e.clientX - ref?.current?.getBoundingClientRect()?.left,
          y: e.clientY - ref?.current?.getBoundingClientRect()?.top,
        })
      }
    }
    ref.current.addEventListener("mousemove", setFromEvent)
    return () => {
      ref.current.removeEventListener("mousemove", setFromEvent)
    }
  }, [])

  return position
}
export default usePosition

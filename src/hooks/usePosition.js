import { useEffect, useState } from "react"

const usePosition = (ref) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  useEffect(() => {
    const setFromEvent = e => {
      const element = ref?.current?.getBoundingClientRect()
      if (
        dragging &&
        e.clientX > element?.left &&
        e.clientX < element?.right &&
        e.clientY > element?.top &&
        e.clientY < element?.bottom
      ) {
        setPosition({
          x: e.clientX - element?.left,
          y: e.clientY - element?.top,
        })
      }
    }
    ref.current.addEventListener("mousemove", setFromEvent)
    return () => {
      ref.current.removeEventListener("mousemove", setFromEvent)
    }
  }, [dragging])

  return {dragging, setDragging, position}
}
export default usePosition

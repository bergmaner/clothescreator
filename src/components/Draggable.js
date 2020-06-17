import React, { useState, useMemo, useEffect } from "react";
const Draggable = ({ children,mousePosition }) => {
  const [dragging, setDragging] = useState(false);
  const [elementPosition, setElementPosition] = useState({ x: 420, y: 580 });
  const handleMouseDown = () => {
    setDragging(true)
  }
  const handleMouseUp = () => {
    setDragging(false);
    setElementPosition({x:mousePosition.x, y:mousePosition.y })
  }
  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown)
    if (dragging) {
      window.addEventListener("mouseup", handleMouseUp)
      
    } else {
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [dragging, handleMouseUp])

  const styles = useMemo(
    () => ({
      cursor: dragging ? "-webkit-grabbing" : "-webkit-grab",
      // transition: dragging ? 'none' : 'transform 500ms',
      position: "absolute",
      left: dragging ? `${mousePosition.x}px` : `${elementPosition.x}px`,
      top: dragging ? `${mousePosition.y}px` : `${elementPosition.y}px`,
      userSelect: "none",
      zIndex: 300,
    }),
    [dragging, mousePosition]
  )

  return (
    <div className="draggable" style={styles}>
      {children}
    </div>
  )
}

export default Draggable

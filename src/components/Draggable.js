import React, { useState, useRef, useMemo, useEffect } from "react";
const Draggable = ({ children,mousePosition,dragging, setDragging }) => {
  const ref = useRef();
  const handleMouseDown = () => {
    setDragging(true)
  }
  const handleMouseUp = () => {
    setDragging(false);
  }
  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown)
    if (dragging) {
      window.addEventListener("mouseup", handleMouseUp)
      
    } else {
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [dragging, handleMouseUp, handleMouseDown])

  const styles = useMemo(
    () => ({
      cursor: "-webkit-grab" ,
      // transition: dragging ? 'none' : 'transform 500ms',
      position: "absolute",
      left: `${mousePosition.x}px`,
      top: `${mousePosition.y}px`,
      userSelect: "none",
      zIndex: 300,
    }),
    [dragging, mousePosition]
  )
  return (
    <div ref={ref} className="draggable" style={styles}>
      {children}
    </div>
  )
}

export default Draggable

import React, { useState, useRef, useMemo, useEffect } from "react";
import usePosition from "../hooks/usePosition";
import { useRect } from "@reach/rect";

const Draggable = ({ children }) => {
  const ref = useRef(null);
  const rect = useRect(ref);
  const mousePosition = usePosition();
  const [dragging, setDragging] = useState(false);
 // const [position, setPosition] = useState({ x: 10, y: 10 });
  const [elementPosition, setElementPosition] = useState({ x: 418, y: 366 });
    // useEffect(() => {
    //   const setFromEvent = e => (rect.x && rect.y) && setPosition({ x: e.pageX-rect.x, y: e.pageY-rect.y });
    //   window.addEventListener("mousemove", setFromEvent);
    //   console.log(position);
    //   return () => {
    //     window.removeEventListener("mousemove", setFromEvent);
    //   };
    // }, [rect]);
  const handleMouseDown = () => {
    setDragging(true)
  }

  const handleMouseUp = () => {
    setDragging(false);
    if(mousePosition.y > 266 )
    setElementPosition({x:mousePosition.x, y:mousePosition.y })
  }

  useEffect(() => {
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
  console.log(rect);
  return (
    <div ref={ref} className="draggable" style={styles} onMouseDown={handleMouseDown}>
      {children}
    </div>
  )
}

export default Draggable

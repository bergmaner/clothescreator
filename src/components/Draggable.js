import React, {useState, useCallback, useMemo, useEffect} from 'react';
import useMousePosition from "../hooks/useMousePosition";

const Draggable = ({children}) => {
  const [dragging, setDragging] = useState(false);
    const mousePosition = useMousePosition();
    const [elementPosition,setElementPosition] = useState({x:0,y:0});
  const handleMouseDown = () => {
     setDragging( true);
  };
	
  const handleMouseUp = () => {
    setDragging(false);
    setElementPosition(mousePosition);
  };
	
  useEffect(() => {
    if (dragging) {
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mouseup', handleMouseUp);
    }
  }, [dragging, handleMouseUp]);
	
  const styles = useMemo(() => ({
    cursor: dragging ? '-webkit-grabbing' : '-webkit-grab',
   // transition: dragging ? 'none' : 'transform 500ms',
    position: "absolute",
    left: dragging ?`${mousePosition.x}px`: `${elementPosition.x}px`,
    top: dragging ? `${mousePosition.y}px`: `${elementPosition.y}px`,
    userSelect: "none",
    zIndex: 300,
  }), [dragging, mousePosition]);
  return (
    <div className="draggable" style={styles} onMouseDown={handleMouseDown}>
      {children}
    </div>
  );
};

export default Draggable;
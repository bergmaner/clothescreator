import React, { useRef } from "react"
import Draggable from "../components/Draggable"
import { useRect } from "@reach/rect"
import usePosition from "../hooks/usePosition"
const Cloth = ({
  image,
  color,
  type,
  fontSize,
  outlineWidth,
  textColor,
  rotate,
  outlineColor,
  text,
}) => {
  const ref = useRef(null);
  const childrenRef = useRef(null);
  const mousePosition = usePosition(ref);
  console.log(mousePosition);
  console.log(childrenRef.current);
  console.log(ref?.current?.getBoundingClientRect());
  return (
    <div>
      <div
        style={{
          height: 460,
          width: 460,
          backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
          position: "relative",
        }}
      >
        <div
          ref={ref}
          style={{
            zIndex: 100,
            position: "absolute",
            top: 85,
            left: 155,
            width: "150px",
            height: "290px",
          }}
        >
          <div ref={childrenRef}>
           <Draggable mousePosition={mousePosition}> 
        {" "}
        <div
          style={{
            color: textColor,
            fontSize: `${fontSize}px`,
            textShadow: `-${outlineWidth}px -${outlineWidth}px 0 ${outlineColor}, ${outlineWidth}px -${outlineWidth}px 0 ${outlineColor}, -${outlineWidth}px ${outlineWidth}px 0 ${outlineColor}, ${outlineWidth}px ${outlineWidth}px 0 ${outlineColor}`,
            transform: `rotate(${rotate}deg)`,
          }}
        >
          {text}
        </div>
      </Draggable>
      </div>
          {" "}
        </div>
        <img
          draggable="false"
          src={require(`../images/${type}/${image}`)}
          style={{
            userSelect: "none",
            position: "absolute",
            height: "100%",
            width: "100%",
          }}
        />
      </div>
    </div>
  )
}
export default Cloth

import React, { useRef } from "react";
import Draggable from "../components/Draggable";
import { useRect } from "@reach/rect";
const Cloth = ({ image, color, type }) => {
  const ref = useRef(null);
  const rect = useRect(ref);
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
          style={{
            zIndex: 100,
            position: "absolute",
            top: 85,
            left: 155,
            width: "150px",
            height: "290px",
          }}
        >
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

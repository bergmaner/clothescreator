import React, { useRef } from "react"
import styled from "styled-components"
import Draggable from "../components/Draggable"
import usePosition from "../hooks/usePosition"

const ColorRectangle = styled.div`
  height: 460px;
  width: 460px;
  position: relative;
  backround-color: ${props =>
    `rgba(${data.color.r},${data.color.g},${data.color.b},${data.color.a})`};
  img {
    user-select: none;
    position: absolute;
    height: 100%;
    width: 100%;
  }
`
const DragContainer = styled.div`
  z-index: 100;
  position: absolute;
  top: 85;
  left: 155;
  width: 150px;
  height: 290px;
`
const Text = styled.div`
  color: ${props => props.data.textColor};
  font-size: ${props => `${props.data.fontSize}px`};
  text-shadow: ${props =>
    `-${props.data.outlineWidth}px -${props.data.outlineWidth}px 0 ${props.data.outlineColor}, ${props.data.outlineWidth}px -${props.data.outlineWidth}px 0 ${props.data.outlineColor}, -${props.data.outlineWidth}px ${props.data.outlineWidth}px 0 ${props.data.outlineColor}, ${props.data.outlineWidth}px ${props.data.outlineWidth}px 0 ${props.data.outlineColor}`};
  transform: ${props => `rotate(${props.data.rotate}deg)`};
`

const Cloth = ({ data }) => {
  const ref = useRef(null)
  const childrenRef = useRef(null)
  const mousePosition = usePosition(ref)
  return (
    <div>
      <ColorRectangle color={data.colorProduct}>
        <DragContainer ref={ref}>
          <div ref={childrenRef}>
            <Draggable mousePosition={mousePosition}>
              {" "}
              <Text data={data}>{data.text}</Text>
            </Draggable>
          </div>{" "}
        </DragContainer>
        <img
          draggable="false"
          src={require(`../images/${data.type}/${data.image}`)}
        />
      </ColorRectangle>
    </div>
  )
}
export default Cloth

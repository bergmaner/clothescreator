import React, { useRef, useState } from "react"
import styled from "styled-components"
import Draggable from "../components/Draggable"
import usePosition from "../hooks/usePosition"

const ColorRectangle = styled.div`
  height: 460px;
  width: 460px;
  position: relative;
  background-color: ${props =>
    `rgba(${props.color.r},${props.color.g},${props.color.b},${props.color.a})`};
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
  top: 85px;
  left: 155px;
  width: 150px;
  height: 290px;
`
const Text = styled.p`
  margin: 0px;
  color: ${props => props.data.textColor};
  font-size: ${props => `${props.data.fontSize}px`};
  text-shadow: ${props =>
    `-${props.data.outlineWidth}px -${props.data.outlineWidth}px 0 ${props.data.outlineColor}, ${props.data.outlineWidth}px -${props.data.outlineWidth}px 0 ${props.data.outlineColor}, -${props.data.outlineWidth}px ${props.data.outlineWidth}px 0 ${props.data.outlineColor}, ${props.data.outlineWidth}px ${props.data.outlineWidth}px 0 ${props.data.outlineColor}`};
  transform: ${props => `rotate(${props.data.rotate}deg)`};
`

const Cloth = ({ data }) => {
  const [dragging, setDragging] = useState(false)
  const ref = useRef(null)
  const childrenRef = useRef(null)
  const dragPosition = usePosition(ref, dragging)

  const setDrag = value => {
    setDragging(value)
  }
  return (
    <div>
      <ColorRectangle color={data.colorProduct}>
        <DragContainer ref={ref}>
          <Draggable
            childrenRef={childrenRef}
            dragPosition={dragPosition}
            dragging={dragging}
            setDragging={setDrag}
          >
            {" "}
            <Text ref={childrenRef} data={data}>
              {data.text}
            </Text>
          </Draggable>
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

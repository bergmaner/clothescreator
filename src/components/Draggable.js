import React, { useRef, useState, useMemo, useEffect } from "react"
import useMousePosition from "../hooks/useMousePosition"
import { IoMdResize, IoMdClose } from "react-icons/io"
import styled from "styled-components"

const DragElement = styled.div`
input{
  width: ${props => `${props.dimensions.width + props.mousePosition.x}px`};
  height: ${props => `${props.dimensions.height + props.mousePosition.y}px`};
  font-size: ${props => `${props.dimensions.height + props.mousePosition.y}px`};
}`
const Cancel = styled(IoMdClose)`
  fill: red;
  font-size: 18px;
`
const CancelButton = styled.div`
  border: 1px solid gray;
  border-radius: 20px;
  height: 20px;
  width: 20px;
  background: white;
  padding: 0px;
  position: absolute;
  z-index: 400;
  left: -18px;
  top: -18px;
`
const ResizeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 20px;
  height: 20px;
  width: 20px;
  background: white;
  padding: 0px;
  position: absolute;
  z-index: 400;
  right: -18px;
  bottom: -18px;
`
const Resize = styled(IoMdResize)`
  fill: blue;
  font-size: 18px;
  transform: rotate(-90deg);
`

const Draggable = ({
  children,
  dragPosition,
  dragging,
  setDragging,
  childrenRef,
}) => {
  const [active, setActive] = useState(false)
  const settingsRef = useRef()
  const resizeRef = useRef()
  const {position, resize, setResize} = useMousePosition( resizeRef,settingsRef)
  const [elementDimensions, setElementDimensions] = useState({
    width: 37.25,
    height: 19,
  })
  const handleMouseDown = e => {
    setDragging(true)
    setActive(true)
  }
  const mouseDown = () => {
    setResize(true)
  }
  const handleMouseUp = () => {
    setDragging(false)
    setResize(false)
  }
  const handleClickOutside = e => {
    if (settingsRef.current && !settingsRef.current.contains(e.target)) {
      setActive(false)
    }
  }

  useEffect(() => {
    childrenRef.current.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mousedown", handleClickOutside)
    window.addEventListener("mouseup", handleMouseUp)
    resizeRef.current.addEventListener("mousedown", mouseDown)
    return () => {
      childrenRef.current.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mousedown", handleClickOutside)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [dragging, handleMouseUp, handleMouseDown, mouseDown])

  const dragStyles = useMemo(
    () => ({
      border: active ? "1px dashed #000" : "",
      position: "absolute",
      left: `${dragPosition.x}px`,
      top: `${dragPosition.y}px`,
      userSelect: "none",
      zIndex: 300,
    }),
    [dragging, dragPosition, active]
  )
  const activeStyles = useMemo(
    () => ({
      display: active ? "block" : "none",
    }),
    [active]
  )
  return (
    <DragElement
      mousePosition={position}
      dimensions={elementDimensions}
      ref={settingsRef}
      style={dragStyles}
    >
      <CancelButton style={activeStyles}>
        <Cancel />
      </CancelButton>
      {children}
      <ResizeButton ref={resizeRef} style={activeStyles}>
        <Resize />
      </ResizeButton>
    </DragElement>
  )
}
export default Draggable

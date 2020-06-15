import React, { useState } from "react"
import { ChromePicker } from "react-color"
import styled from "styled-components"

const Pallete = styled.div`
  position: absolute;
  z-index: 100;
`

const ColorPicker = ({ color, changeColor }) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setOpen(true)}>color</button>
      {open && (
        <Pallete onMouseLeave={() => setOpen(false)}>
          <ChromePicker color={color} onChange={changeColor} />
        </Pallete>
      )}
    </div>
  )
}
export default ColorPicker

import React, { useState } from "react";
import TShirt from "../components/TShirt";
import Layout from "../components/layout";
import ColorPicker from "../components/ColorPicker";

const IndexPage = () => {
  const buttonsConfig = [
    { text: "przód", onClick: () => setImage("front.png") },
    { text: "tył", onClick: () => setImage("back.png") },
    { text: "lewy", onClick: () => setImage("left.png") },
    { text: "prawy", onClick: () => setImage("right.png") },
  ]
  const [image, setImage] = useState("front.png");
  const [color, setColor] = useState({
    r: "0",
    g: "0",
    b: "0",
    a: "1",
  })
  const changeColor = col => {
    setColor(col.rgb)
  }
  return (
    <Layout>
      {buttonsConfig.map(item => (
        <button onClick={item.onClick}>{item.text}</button>
      ))}
      <ColorPicker color={color} changeColor={changeColor} />
      <TShirt color={color} image={image} />
    </Layout>
  )
}

export default IndexPage

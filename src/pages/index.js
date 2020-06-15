import React, { useState } from "react";
import Cloth from "../components/Cloth";
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
  const [type, setType] = useState("tshirt");
  const [color, setColor] = useState({
    r: "0",
    g: "0",
    b: "0",
    a: "1",
  })
  const changeColor = col => {
    setColor(col.rgb)
  }
  console.log(type);
  return (
    <Layout>
      {buttonsConfig.map(item => (
        <button onClick={item.onClick}>{item.text}</button>
      ))}
       <select name="type" value={type} onChange={ (e) => setType(e.target.value) }>
    <option value="tshirt">Koszulka</option>
    <option value="hoodie">Bluza</option>
    <option value="sweatshirt">Sweter</option>
  </select>
      <ColorPicker color={color} changeColor={changeColor}/>
      <Cloth color={color} image={image} type={type} />
    </Layout>
  )
}

export default IndexPage

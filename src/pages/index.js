import React, { useState, useEffect, useRef } from "react"
import Cloth from "../components/Cloth"
import Layout from "../components/layout"
import ColorPicker from "../components/ColorPicker"
import ButtonsMenu from "../components/ButtonsMenu"
const IndexPage = () => {
  const buttonsConfig = [
    { text: "przód", onClick: () => setImage("front.png") },
    { text: "tył", onClick: () => setImage("back.png") },
    { text: "lewy", onClick: () => setImage("left.png") },
    { text: "prawy", onClick: () => setImage("right.png") },
  ]
  const [image, setImage] = useState("front.png")
  const [sticker, setSticker] = useState("")
  const [fontSize, setFontSize] = useState(16)
  const [textColor, setTextColor] = useState("#000")
  const [outlineWidth, setOutlineWidth] = useState(0)
  const [outline, setOutline] = useState(false)
  const [outlineColor, setOutlineColor] = useState("#000")
  const [fontFamily, setFontFamily] = useState("Arial")
  const [type, setType] = useState("tshirt")
  const [rotate, setRotate] = useState(0)
  const [text, setText] = useState("")
  


  const [colorProduct, setColorProduct] = useState({
    r: "0",
    g: "0",
    b: "0",
    a: "1",
  })
  useEffect(() => {
    outline ? setOutlineWidth(1) : setOutlineWidth(0)
  }, [outline])

  
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ButtonsMenu/>
        <Cloth
          color={colorProduct}
          image={image}
          type={type}
          textColor={textColor}
          fontSize={fontSize}
          outlineWidth={outlineWidth}
          rotate={rotate}
          outlineColor={outlineColor}
          text={text}
        />
        <div>
          <div>
            {buttonsConfig.map(item => (
              <button onClick={item.onClick}>{item.text}</button>
            ))}
          </div>

          <div>
            <select
              name="type"
              value={type}
              onChange={e => setType(e.target.value)}
            >
              <option value="tshirt">Koszulka</option>
              <option value="hoodie">Bluza</option>
              <option value="sweatshirt">Sweter</option>
            </select>
            <ColorPicker
              text="colorProduct"
              color={colorProduct}
              changeColor={color => setColorProduct(color.rgb)}
            />
            <input
              placeholder="Text on product"
              type="text"
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <ColorPicker
              text="textColor"
              color={textColor}
              changeColor={color => setTextColor(color.hex)}
            />
            <input
              placeholder="Font-size"
              type="number"
              value={fontSize}
              onChange={e => setFontSize(e.target.value)}
            />
            <div>
              {" "}
              <input
                type="range"
                id="rotate"
                name="rotate"
                onChange={e => setRotate(e.target.value)}
                min="-180"
                max="180"
              />
              <label style={{ margin: ".4rem" }}>Rotate</label>
              {rotate}
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                value={outline}
                onChange={() => setOutline(!outline)}
                id="outline"
                name="outline"
              />
              <label style={{ margin: ".4rem" }} for="outline">
                Outline
              </label>
              <ColorPicker
                text="outline Color"
                color={outlineColor}
                changeColor={color => setOutlineColor(color.hex)}
              />
            </div>
           
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

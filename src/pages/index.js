import React, { useState, useEffect, useRef } from "react"
import Cloth from "../components/Cloth"
import Layout from "../components/layout"
import ColorPicker from "../components/ColorPicker"
import ButtonsMenu from "../components/ButtonsMenu"
import styled from "styled-components"

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;`;

const IndexPage = () => {
  const buttonsConfig = [
    { text: "przód", onClick: () => setData({...data,image:"front.png"}) },
    { text: "tył", onClick: () => setData({...data,image:"back.png"}) },
    { text: "lewy", onClick: () => setData({...data, image:"left.png"}) },
    { text: "prawy", onClick: () => setData({...data, image:"right.png"}) },
  ]
  const [data, setData] = useState({
    image: "front.png",
    sticker: "",
    fontSize: 16,
    textColor: "#000",
    outlineWidth: 0,
    outline: false,
    outlineColor: "#000",
    fontFamily: "Arial",
    type: "tshirt",
    rotate: 0,
    text: "",
    colorProduct:{
    r: "0",
    g: "0",
    b: "0",
    a: "1",
    }
  });
  const setDatas = (value) =>{
    setData(value);
  }
  useEffect(() => {
    data.outline ? setData({ ...data, outlineWidth: 1}) : setData({ ...data, outlineWidth: 0})
  }, [data.outline])

  
  return (
    <Layout>
      <Container>
        <ButtonsMenu data = {data} setData = {setDatas}/>
        <Cloth data={data}/>
        <div>
          <div>
            {buttonsConfig.map(item => (
              <button onClick={item.onClick}>{item.text}</button>
            ))}
          </div>
          <div>
            <ColorPicker
              text="colorProduct"
              color={data.colorProduct}
              changeColor={color => setData({ ...data, colorProduct: color.rgb })}
            />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage

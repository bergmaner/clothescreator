import React, { useState, useEffect } from "react"
import Cloth from "../components/Cloth"
import ColorPicker from "../components/ColorPicker"
import ButtonsMenu from "../components/ButtonsMenu"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import { buttonsConfig, initialData } from "../helpers/config"

const Container = styled.div`
  height: calc(100vh - 72px);
  margin-top: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
user-select: none;
position: absolute;
height: 100%;
width: 100%;
`;

const TextContainer = styled.div`
  z-index: 100;
  position: absolute;
  font-size:9px;
  top: 10px;
  left: 17px;
  width: 15px;
  height: 33px;
`;

const Text = styled.div`
position:absolute;
left: 5px;
top: 4px;
`;

const ColorRectangle = styled.div`
width: 75px; 
height: 75px;
position: relative;
background-color: ${props =>
  `rgba(${props.background.r},${props.background.g},${props.background.b},${props.background.a})`};
margin: 5px;
`;

const Gallery = styled.div`

`;

const IndexPage = () => {
  
  const [data, setData] = useState(initialData)
  const setDatas = value => {
    setData(value)
  }
  useEffect(() => {
    data.outline
      ? setData({ ...data, outlineWidth: 1 })
      : setData({ ...data, outlineWidth: 0 })
  }, [data.outline])

  return (
    <div>
      <Navbar />
      <Container>
        <ButtonsMenu data={data} setData={setDatas} />
        <Cloth data={data} setData={setDatas} />
        <div>
          <Gallery>
            {buttonsConfig.map(item => (
              <ColorRectangle background={data.colorProduct} onClick={ () => setData({ ...data, image: item.path})}>
                <TextContainer><Text>{data.text}</Text></TextContainer>
                <Image
                  src={require(`../assets/images/${data.type}/${item.text}.png`)}
                />
              </ColorRectangle>
            ))}
          </Gallery>
          <div>
            <ColorPicker
              text="colorProduct"
              color={data.colorProduct}
              changeColor={color =>
                setData({ ...data, colorProduct: color.rgb })
              }
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default IndexPage

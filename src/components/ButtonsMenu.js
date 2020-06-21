import React, { useRef, useState } from "react"
import ModalBox from "../components/ModalBox"
import Button from "../components/Button"
import ColorPicker from "../components/ColorPicker"
import { AiOutlineCloudUpload } from "react-icons/ai"
import { MdTextFields } from "react-icons/md"
import { RiTShirtLine } from "react-icons/ri"
import { IoMdColorPalette, IoMdImages } from "react-icons/io"
import styled from "styled-components"

const ProductsContainer = styled.div`
  display: inline-block; 
  div {
    cursor:pointer;
    background: ${props => `rgba(${props.color.r},${props.color.g},${props.color.b},${props.color.a})` };
    height:150px;
    width: 150px;
  }
  div:hover{
    filter: brightness(80%);
  }
  span {
    display: flex;
    justify-content: center;
    text-transform: capitalize;
  }
  img {
    margin: 0px;
    width: 150px;
    height: 150px;
  }
`
const Form = styled.div`
div label{
 margin: 0.4rem;
}
`;

const ButtonsMenu = ({ data, setData }) => {
  const [openProduct, setOpenProduct] = useState(false)
  const [openTheme, setOpenTheme] = useState(false)
  const [openText, setOpenText] = useState(false)
  const [openImages, setOpenImages] = useState(false)
  const [file, setFile] = useState("")
  const inputRef = useRef()
  const fileUploadAction = () => inputRef.current.click()
  const fileUploadInputChange = e => setFile(e.target.value)
  const products = [
    { content: "tshirt" },
    { content: "hoodie" },
    { content: "sweatshirt" },
  ]
  const closeOpenProduct = (value) =>{
    setData({ ...data, type: value});
    setOpenProduct(false);
  }
  return (
    <div>
      <input
        type="file"
        hidden
        ref={inputRef}
        onChange={() => fileUploadInputChange}
      />
      <ModalBox
        handleClose={() => setOpenProduct(false)}
        open={openProduct}
        button={
          <Button
            onClick={() => setOpenProduct(true)}
            icon={<RiTShirtLine />}
            text="Change Product"
          />
        }
      >
        <div>
          <h2>Change Product</h2>
          {products.map(product => (
            <ProductsContainer color={data.colorProduct}>
              <div onClick={ () => closeOpenProduct(product.content)}><img src={require(`../images/${product.content}/front.png`)}/></div>
              <span>{product.content}</span>
            </ProductsContainer>
          ))}
        </div>
      </ModalBox>

      <ModalBox
        handleClose={() => setOpenTheme(false)}
        open={openTheme}
        button={
          <Button
            onClick={() => setOpenTheme(true)}
            icon={<IoMdColorPalette />}
            text="Select theme"
          />
        }
      >
        <div>
          <h2>Style theme</h2>
          <div>KOddsokfs</div>
        </div>
      </ModalBox>
      <ModalBox
        handleClose={() => setOpenText(false)}
        open={openText}
        button={
          <Button
            onClick={() => setOpenText(true)}
            icon={<MdTextFields />}
            text="Add a text"
          />
        }
      >
        <div>
          <h2>Add a text</h2>
          <Form>
            <input
              placeholder="Text on product"
              type="text"
              value={data.text}
              onChange={e => setData({ ...data, text: e.target.value })}
            />
            <ColorPicker
              text="textColor"
              color={data.textColor}
              changeColor={color => setData({ ...data, textColor: color.hex })}
            />
            <input
              placeholder="Font-size"
              type="number"
              value={data.fontSize}
              onChange={e => setData({ ...data, fontSize: e.target.value })}
            />
            <div>
              {" "}
              <input
                type="range"
                id="rotate"
                name="rotate"
                onChange={e => setData({ ...data, rotate: e.target.value })}
                min="-180"
                max="180"
              />
              <label>Rotate</label>
              {data.rotate}
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                value={data.outline}
                onChange={() => setData({ ...data, outline: !data.outline })}
                id="outline"
                name="outline"
              />
              <label for="outline">
                Outline
              </label>
              <ColorPicker
                text="outline Color"
                color={data.outlineColor}
                changeColor={color =>
                  setData({ ...data, outlineColor: color.hex })
                }
              />
            </div>
          </Form>
        </div>
      </ModalBox>

      <ModalBox
        handleClose={() => setOpenImages(false)}
        open={openImages}
        button={
          <Button
            onClick={() => setOpenImages(true)}
            icon={<IoMdImages />}
            text="Add a image"
          />
        }
      >
        <div>
          <h2>Add a image</h2>
          <div>KOddsokfs</div>
        </div>
      </ModalBox>

      <Button
        onClick={() => fileUploadAction()}
        icon={<AiOutlineCloudUpload />}
        text="upload a image"
      />
    </div>
  )
}
export default ButtonsMenu

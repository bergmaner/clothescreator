import React, { useRef, useState } from "react"
import ModalBox from "../components/ModalBox"
import Button from "../components/Button"
import { AiOutlineCloudUpload } from "react-icons/ai"
import { MdTextFields } from "react-icons/md"
import { RiTShirtLine } from "react-icons/ri"
import { IoMdColorPalette, IoMdImages } from "react-icons/io"
const ButtonsMenu = () => {
  const [openProduct, setOpenProduct] = useState(false)
  const [openTheme, setOpenTheme] = useState(false)
  const [openText, setOpenText] = useState(false)
  const [openImages, setOpenImages] = useState(false)
  const [file, setFile] = useState("")
  const inputRef = useRef()
  const fileUploadAction = () => inputRef.current.click()
  const fileUploadInputChange = e => setFile(e.target.value)
  const products = [{content: "tshirt"}, {content: "hoodie"}, {content: "sweatshirt"}]
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
            icon={<RiTShirtLine style={{ fontSize: "50px" }} />}
            text="Change Product"
          />
        }
      >
        <div>
        <h2>Change Product</h2>
        {products.map( (product) => (
         <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            display: "inline-block",
          }}
        >
          <img
            src={require(`../images/${product.content}/front.png`)}
            style={{
              width: "150px",
              margin: "0px"
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textTransform: "capitalize",
            }}
          >
            {product.content}
          </div>
        </div>
        ))}
        </div>
      </ModalBox>

      <ModalBox
        handleClose={() => setOpenTheme(false)}
        open={openTheme}
        button={
          <Button
            onClick={() => setOpenTheme(true)}
            icon={<IoMdColorPalette style={{ fontSize: "50px" }} />}
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
            icon={<MdTextFields style={{ fontSize: "50px" }} />}
            text="Add a text"
          />
        }
      >
        <div>
          <h2>Add a text</h2>
          <div>KOddsokfs</div>
        </div>
      </ModalBox>
        
      <ModalBox
        handleClose={() => setOpenImages(false)}
        open={openImages}
        button={
          <Button
            onClick={() => setOpenImages(true)}
            icon={<IoMdImages style={{ fontSize: "50px" }} />}
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
        icon={<AiOutlineCloudUpload style={{ fontSize: "50px" }} />}
        text="upload a image"
      />
    </div>
  )
}
export default ButtonsMenu

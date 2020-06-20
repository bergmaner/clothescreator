import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"

const ModalBox = ({ button, open, handleClose, children }) => {
  function getModalStyle() {
    const top = 50
    const left = 50

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    }
  }

  const useStyles = makeStyles(theme => ({
    paper: {
      position: "absolute",
      width: "80vw",
      height: "80vh",
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }))

  const classes = useStyles()
  const [modalStyle] = React.useState(getModalStyle)

  return (
    <div>
      {button}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
         {children}
        </div>
      </Modal>
    </div>
  )
}
export default ModalBox

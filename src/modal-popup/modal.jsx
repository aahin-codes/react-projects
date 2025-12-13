import data from "./modal-data";
import Rendering from "../rendering-component/rendering";
import { useState } from "react";
import ModalPopup from "./modal-popup";
export default function Modal() {

  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleModalPopup() {
    setShowModalPopup(!showModalPopup)
  }

  function onClose(){
    setShowModalPopup(false)
  }

  function renderingBox() {
    return (<div className="demo-box modal-container">
      <button onClick={() => handleModalPopup() }>Open Modal Popup</button>
      {showModalPopup && <ModalPopup modalPopup={onClose} />}
    </div>)
  }
  return (
    <Rendering data={data} demoBox={renderingBox()} />
  )
}

import './_modal.scss';
import data from "./modal-data";
import Rendering from "../RenderingComponent/Rendering";
import { useState } from "react";
import ModalCard from "./ModalCard";
export default function Modal() {

  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleModalPopup() {
    setShowModalPopup(!showModalPopup)
  }

  function onClose(){
    setShowModalPopup(false)
  }

  const renderingContent = (<>
      <button onClick={() => handleModalPopup() }>Open Modal Popup</button>
      {showModalPopup && <ModalCard modalPopup={onClose} />}
    </>)
  
  return (
    <Rendering data={data} renderingComponent={renderingContent} className={"modal-container"}/>
  )
}

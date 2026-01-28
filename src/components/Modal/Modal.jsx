import './_modal.scss';
import data from "./modal-data";
import Rendering from "../RenderingComponent/Rendering";
import { useEffect, useState } from "react";
import ModalCard from "./ModalCard";
export default function Modal() {

  const [showModalPopup, setShowModalPopup] = useState(false);
  const [width, setWidth] = useState({ innerWidth: 0 })

  function handleModalPopup() {
    setShowModalPopup(!showModalPopup)
  }

  function onClose() {
    setShowModalPopup(false)
  }

  useEffect(() => {
    
    function handleResize() {
      setWidth({ innerWidth: window.innerWidth })
    }
    handleResize()
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])
  const renderingContent = (<>
    {showModalPopup ? null : <button onClick={() => handleModalPopup()}>Open Modal Popup</button>}
    {showModalPopup && <ModalCard modalPopup={onClose} responsive={width}/>}
  </>)

  return (
    <Rendering data={data} renderingComponent={renderingContent} className={"modal-container"} />
  )
}

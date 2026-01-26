import './_qrCode.scss';
import { useState } from 'react'
import Rendering from '../RenderingComponent/Rendering'
import data from './qr-code-data'
import QRCode from 'react-qr-code';

export default function QrCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [inputValue, setInputValue] = useState("");
  function handleGenerateQrCode() {
    setQrCode(inputValue)
  }

  const renderingContent = (
      <>
        <div className='input-container'>
          <input type="text" name='qr-code' className={qrCode.trim("") === "" && 'error'} placeholder='Enter your value here...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button onClick={() => handleGenerateQrCode()}>Generate</button>
        </div>
        <div className="qr-code-container">
          <QRCode id='qr-code-val' value={qrCode || "Please enter the value"} />
        </div>
      </>
    )
  
  return (
    <Rendering data={data} renderingComponent={renderingContent} className={"qr-code"} />
  )
}

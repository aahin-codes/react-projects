import { useEffect, useState, useCallback } from "react";
import data from "./rcg-data";
import Rendering from "../rendering-component/rendering";

export default function RandomColorGenerator() {

  const [colorType, setColorType] = useState('hex');
  const [color, setColor] = useState('#232323');

  function handleColorType(color) {
    setColorType(color);

  }
  const randomColor = useCallback(() => {
    const hexcode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    if (colorType === 'hex') {
      let hex = '#';
      for (let i = 0; i <= 5; i++) {
        hex += hexcode[Math.floor(Math.random() * hexcode.length)];
      }
      setColor(hex);
    } else {
      const rgb = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      setColor(rgb);
    }
  }, [colorType]);

  function renderingBox(){
    return(
       <div className="demo-box random-color-generator" style={{ backgroundColor: color }}>
        <p>{color}</p>
        <button onClick={() => randomColor()}>Generate Color</button>
       </div>
    )
  }

  function renderingButtons(){
    return(
    <>
    <button
    onClick={() => handleColorType("hex")}
    className={colorType === "hex" ? "active" : null}
    >
    HEX
    </button>
    <button
    onClick={() => handleColorType("rgb")}
    className={colorType === "rgb" ? "active" : null}
    >
    RGB
   </button>
    </>)
  }

  useEffect(() => {
    randomColor();
  }, [randomColor]);

  return (
    <Rendering data={data} demoBox={renderingBox()} activeType={colorType} buttons={renderingButtons()}/>
  )
}

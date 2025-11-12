import { IoLogoGithub } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import './_random-color-generator.scss';

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

  useEffect(() => {
    randomColor();
  }, [randomColor]);

  return (
    <div className="rendering-comp">
      <div className="rendering-comp-wrapper">
        <nav>
          <ul>
            <li>
              <Link to={"/"}>
                <FaArrowLeftLong /> Projects
              </Link>
            </li>
            <li>
              <IoLogoGithub className="github-icon" />
            </li>
          </ul>
        </nav>
        <div className="rendering-comp-content">
          <div className="btn-wrapper">
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
          </div>
          <div className="demo-box" style={{ backgroundColor: color }}>
            <p>{color}</p>
            <button onClick={() => randomColor()}>Generate Color</button>
          </div>
        </div>
      </div>
    </div>
  )
}

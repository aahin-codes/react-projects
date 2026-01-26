import { Link } from "react-router-dom"; import { IoLogoGithub } from
  "react-icons/io"; import { FaArrowLeftLong } from "react-icons/fa6";
import './_rendering.scss';
export default function Rendering({ data = null, activeType = null, buttons = null, renderingComponent = null, className = "" , bgColor = ""}) {
  return (
    <div className="rendering-comp">
      <div className="rendering-comp-wrapper">
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to={"/"}>
                <FaArrowLeftLong /> All Projects
              </Link>
            </li>
            <li>
              <IoLogoGithub className="github-icon" />
            </li>
          </ul>
        </nav>
        {/* Main Content */}
        <div className="rendering-comp-content">
          {buttons &&
            <div className="btn-wrapper">{buttons}</div>} {/* Data-driven content */}
          {data ? data.map((item, index) => {
            return (

              activeType !== null ? item.type === activeType && (<div
                className="content"
                key={item?.id || index + 1}
              >
                <h2>{item.title}</h2>
                <p>{item.shortDescription}</p>
                <p className="sub-title">Demo</p>
                <div className={`demo-box ${className}`} style={{background: bgColor ? bgColor : null}}>
                  {renderingComponent}
                </div>


                <p className="sub-title">Description</p>
                <p>{item.description}</p>
              </div>) : (<div
                className="content"
                key={item?.id || index + 1}
              >
                <h2>{item.title}</h2>
                <p>{item.shortDescription}</p>
                <p className="sub-title">Demo</p>
                <div className={`demo-box ${className}`} style={{background: bgColor? bgColor : null}}>
                  {renderingComponent}
                </div>


                <p className="sub-title">Description</p>
                <p>{item.description}</p>
              </div>))
          }) : null}
        </div>
      </div>

    </div>
  )
}
import { Link } from "react-router-dom"; import { IoLogoGithub } from
"react-icons/io"; import { FaArrowLeftLong } from "react-icons/fa6";
import './_rendering.scss';
export default function Rendering({ data, activeType = null, buttons = null, demoBox })
{ return (
<div className="rendering-comp">
  <div className="rendering-comp-wrapper">
    {/* Navigation */}
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
    {/* Main Content */}
    <div className="rendering-comp-content">
      {buttons &&
      <div className="btn-wrapper">{buttons}</div>} {/* Data-driven content */}
      {data.map((item) => { return( item.type === activeType && (<div
        className="content"
        key="{item.type}"
      >
        <h2>{item.title}</h2>
        <p>{item.shortDescription}</p>
        <p className="sub-title">Demo</p>

        {/* Custom demo section passed from parent */} {demoBox}

        <p className="sub-title">Description</p>
        <p>{item.description}</p>
      </div>)) })}
    </div>
  </div>

</div>
) }
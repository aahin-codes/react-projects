import { Link } from "react-router-dom";
import "./_accordion.scss";
import { IoLogoGithub } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import data from "./accordion-data";
import { useState } from "react";
import AccordionList from "./accordion-list";

export default function Accordion() {
  const [accordionType, setAccordionType] = useState("single");

  function handleAccordionType(type) {
    setAccordionType(type);
  }

  return (
    <div className="accordion-comp">
      <div className="accordion-comp-wrapper">
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
        <div className="accordion-comp-content">
          <div className="btn-wrapper">
            <button
              onClick={() => handleAccordionType("single")}
              className={
                accordionType && accordionType === "single" ? "active" : null
              }
            >
              Single
            </button>
            <button
              onClick={() => handleAccordionType("multiple")}
              className={
                accordionType && accordionType === "multiple" ? "active" : null
              }
            >
              Multiple
            </button>
          </div>
          {data.map((item) => {
            if (item.type === accordionType) {
              return (
                <div className="content" key={item.type}>
                  <h2>{item.title}</h2>
                  <p>{item.shortDescription}</p>
                  <p className="sub-title">Demo</p>
                  {<AccordionList type={accordionType} />}
                  <p className="sub-title">Description</p>
                  <p>{item.description}</p>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

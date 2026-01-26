import "./_accordion.scss";
import { FaPlus, FaMinus } from "react-icons/fa6";
import data from "./accordion-data";
import { useState } from "react";
import Rendering from "../RenderingComponent/Rendering";
import accordionData from "./accordion-list-data";

export default function Accordion() {
  const [accordionType, setAccordionType] = useState("single");

  const [multiple, setMultiple] = useState([]);
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(id) {
    setSelected(selected === id ? null : id);
  }
  function handleMultipleSelection(id) {
    const newSelection = [...multiple];
    let check = newSelection.indexOf(id);

    check === -1 ? newSelection.push(id) : newSelection.splice(check, 1);

    setMultiple(newSelection);
  }

  function handleAccordionType(type) {
    setMultiple([]);
    setSelected(null);
    setAccordionType(type);
  }

   const renderingButtons = (
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
    )
  

 const renderingContent = (<div className="accordion-list">
        {accordionData && accordionData.length ? (
          accordionData.map((item) => {
            return (
              <div className="accordion-item" key={item.id}>
                <div
                  className="title"
                  onClick={() =>
                    accordionType && accordionType === "single"
                      ? handleSingleSelection(item.id)
                      : handleMultipleSelection(item.id)
                  }
                >
                  <h4>{item.title}</h4>
                  <div className="icon-wrapper">
                    <FaPlus
                      className={
                        selected === item.id || multiple.indexOf(item.id) !== -1
                          ? "icon hide"
                          : "icon show"
                      }
                    />
                    <FaMinus
                      className={
                        selected === item.id || multiple.indexOf(item.id) !== -1
                          ? "icon show"
                          : "icon hide"
                      }
                    />
                  </div>
                </div>
                <p
                  className={
                    selected === item.id || multiple.indexOf(item.id) !== -1
                      ? "description show"
                      : "description hide"
                  }
                >
                  {item.description}
                </p>
              </div>
            );
          })
        ) : (
          <div>Issue in data...</div>
        )}
      </div>
    )
  

  return (
    <Rendering data={data} activeType={accordionType} buttons={renderingButtons} renderingComponent={renderingContent} className={'accordion'} />
  );
}

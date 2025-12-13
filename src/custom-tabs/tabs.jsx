import data from "./tabs-data";
import { tabsData } from "./tabs-data";
import Rendering from "../rendering-component/rendering";
import { useState } from "react";
export default function Tabs() {

    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function renderingBox() {
        return(
            <div className="demo-box tabs-container">
                <div className="tabs-wrapper">
                    <div className="heading">
                        {tabsData.map((tab, index)=><div key={tab.label} onClick={(e)=> setCurrentTabIndex(index)} className={currentTabIndex === index ? "active":"unactive"}>{tab.label}</div>)}
                    </div>
                    <div className="content">
                        {tabsData.map((tab, index)=> currentTabIndex===index && <div key={tab.content}>{tab.content}</div>)}
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <Rendering data={data} demoBox={renderingBox()} />
    )
}

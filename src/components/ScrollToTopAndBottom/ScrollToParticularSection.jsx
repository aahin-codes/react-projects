import { useRef } from "react";
import Rendering from "../RenderingComponent/rendering";
import datas from "./scroll-indicator-data";


export default function ScrollToParticularSection() {

    const ref = useRef();

    const data = [
        {
            label:"First Card",
            style:{
                width: "100%",
                height:"600px",
                background:"green"
            }
        },
        {
            label:"Second Card",
            style:{
                width: "100%",
                height:"600px",
                background:"orange"
            }
        },
        {
            label:"Third Card",
            style:{
                width: "100%",
                height:"600px",
                background:"yellow"
            }
        },
        {
            label:"Fourth Card",
            style:{
                width: "100%",
                height:"600px",
                background:"skyblue"
            }
        }
    ]

    function handleScroll(){
        let pos = ref.current.getBoundingClientRect().top;

        window.scrollTo({
            top:pos,
            behavior:"smooth"
        })
    }

    function renderingBox(){
        return(<div className="demo-box">
            <h2>Scroll to Particular Section</h2>
            <button onClick={handleScroll}>Click To Scroll</button>
            {
                data.map((item,ind)=>{
                    return <div ref={ind === 1 ? ref : null} style={item.style}>{item.label}</div>
                })
            }

        </div>)
    }
  return (
     <Rendering data={datas} demoBox={renderingBox()} />
    )
}

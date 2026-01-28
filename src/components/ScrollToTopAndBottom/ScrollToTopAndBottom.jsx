import "./_scroll.scss";
import datas from "./scroll-to-top-and-bottom";
import Rendering from "../RenderingComponent/Rendering";
import { useRef } from "react";
import useFetch from "../useFetchHook/useFetch";





export default function ScrollToTopAndBottom() {

    const { data, error, loading } = useFetch("https://dummyjson.com/products?limit=100");


    const bottomRef = useRef();
    const topRef = useRef();

    function handleScrollToTop() {
        topRef.current.scrollIntoView({ behavior: "smooth" })
    }

    function handleScrollToBottom() {
        bottomRef.current.scrollIntoView({ behavior: "smooth" })
    }


    const renderingContent = (
        <>

            <h2>Scroll Top to Bottom</h2>
            <button ref={topRef} onClick={handleScrollToBottom}>Scroll to bottom</button>
            <ul>
                {data && data.products && data.products.length ? data.products.map((item, ind) => <li key={ind}>{item.title}</li>) : null}
            </ul>
            <button ref={bottomRef} onClick={handleScrollToTop}>Scroll to top</button>

        </>
    )

    return (
        <Rendering data={datas} renderingComponent={renderingContent} className={'scroll'}/>)
}

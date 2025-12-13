import datas from "./scroll-indicator-data";
import Rendering from "../rendering-component/rendering";
import { useEffect, useState } from "react";
export default function ScrollIndicator({ url = 'https://dummyjson.com/products?limit=100' }) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const result = await response.json();

            if (result.products) {
                setData(result.products)
                setLoading(false);
            }
        } catch (e) {
            setLoading(false);
        }

    }


    useEffect(() => {
        fetchData(url);
    }, [url])

    useEffect(() => {
        const el = document.querySelector('.scroll-indicator');
        if(!el) return;
        function handleScroll() {
            // console.log(document.body.scrollTop, document.documentElement.scrollTop, document.documentElement.scrollHeight, document.documentElement.clientHeight);
            const howMuchScrolled = el.scrollTop;
            const height = el.scrollHeight - el.clientHeight;
            // console.log((howMuchScrolled / height) * 100);

            setScrollPercentage((howMuchScrolled / height) * 100)
        }
        el.addEventListener('scroll', handleScroll);
        return () => {
            el.removeEventListener('scroll', handleScroll)
        }
    })


    function renderingBox() {
        return (
            <>
            <div className="indicator-wrapper">
                    <div className="indicator" style={{width:`${scrollPercentage}%`}}></div>
                </div>
            <div className='demo-box scroll-indicator'>
                
                <div className="content">
                    {data.map((item, index) => {
                    return <p key={index}>{item.title}</p>
                })}
                </div>
            </div>
            </>
        )
    }
    if (loading) {
        return <div>Loading</div>
    }

    return (
        <Rendering data={datas} demoBox={renderingBox()} />
    )
}

import './_loadMoreComponent.scss'
import { useCallback, useEffect, useState } from 'react'
import Rendering from '../RenderingComponent/Rendering'
import data from './load-more-data';

export default function LoadMoreComponent({ url = 'https://dummyjson.com/products?limit=20&skip=' }) {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [errMsg, setErrMsg] = useState(null);
    const [count, setCount] = useState(0);

    const fetchProducts = useCallback( async (getUrl)=> {
        try {
            setLoading(true)
            const response = await fetch(`${getUrl}${count === 0 ? count : count * 20}`);
            const jsonData = await response.json();

            if (jsonData && jsonData.products) {
                count === 0 ? setProducts(jsonData.products) : setProducts(prevData => [...prevData, ...jsonData.products])
                setLoading(false);
            }
        } catch (error) {
            setErrMsg(error.message);
            setLoading(false);
        }
    },[count])

    function LoadMore() {
        setCount(prevCount => prevCount + 1);
    }
    const renderingContent =(
            <>
                <div className="products">
                    {products && products.length ? products.map((item, index) => {
                        return (
                            <div className='product' key={index}>
                                <img src={item.thumbnail} alt={item.title} />
                                <p>{item.title}</p>
                            </div>
                        )
                    }) : <div>Loading</div>}
                </div>
                <button onClick={LoadMore} disabled={products.length === 100}>Load More</button>
            </>
        )
    

    
    useEffect(() => {
        url !== null && fetchProducts(url);
    }, [url, fetchProducts])

    return (
        <Rendering data={data} renderingComponent={renderingContent} className={"load-more-container"} />
    )
}

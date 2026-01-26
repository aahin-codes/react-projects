import useFetch from "./useFetch"
import Rendering from '../RenderingComponent/Rendering'
import dataHooks from './useFetch-hooks-data';

export default function UseFetchHook() {
    const { data, error, loading } = useFetch("https://dummyjson.com/products");

    const renderingContent = (
        <>
            <h2>UseFetch</h2>
            <ul>
                {data && data.products && data.products.length > 1 ? data.products.map((product, ind) => <li key={ind}>{product.title}</li>) : null}
            </ul>
        </>
    )

    return (
        <>
            <Rendering data={dataHooks} renderingComponent={renderingContent} />
        </>
    )
}

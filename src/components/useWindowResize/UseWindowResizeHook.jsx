import Rendering from '../RenderingComponent/Rendering'
import dataHooks from './useWindowResize-hooks-data';
import useWindowResize from './useWindowResize';

export default function UseWindowResizeHook() {

    const windowSize = useWindowResize();
    const {height, width} = windowSize;


    const renderingContent = (
            <>
                <h2>Window Resize</h2>
                <p>Width is {width}</p>
                <p>Height is {height}</p>
            </>
        )
    return (
        <>
            <Rendering data={dataHooks} renderingComponent={renderingContent} />
        </>
    )
}

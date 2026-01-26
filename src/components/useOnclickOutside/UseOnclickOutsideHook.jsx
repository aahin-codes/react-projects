import { useRef, useState } from 'react';
import Rendering from '../RenderingComponent/Rendering'
import dataHooks from './useOnclickOutside-hooks-data';
import useOnclickOutside from './useOnclickOutside';

export default function UseOnclickOutsideHook() {

    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    useOnclickOutside(ref, () => setShowContent(false))
    const renderingContent = (
        <>
            {showContent ? (<div ref={ref}> <h2>ClickOutside</h2>
            <p>Please Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam nemo laboriosam ducimus rem voluptates, a temporibus excepturi adipisci dolor sunt!</p> </div>) : <button onClick={() => setShowContent(true)}>Show Content</button>}
        </>
    )

    return (
        <>
            <Rendering data={dataHooks} renderingComponent={renderingContent} />
        </>
    )
}

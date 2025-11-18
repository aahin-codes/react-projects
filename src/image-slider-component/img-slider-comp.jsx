import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Rendering from "../rendering-component/rendering";
import data from "./img-data";

export default function ImgSliderComp({ url = "https://picsum.photos/v2/list?", page = 1, limit = 5 }) {

    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(api) {
        try {
            setLoading(true);
            const response = await fetch(`${api}page=${page}&limit=${limit}`);
            console.log(`${api}page=${page}&limit=${limit}`);

            const jsonData = await response.json();

            if (jsonData) {
                setImages(jsonData);
                setLoading(false);
            }

        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url !== '') {
            fetchImages(url);
        }
    }, [url])

    function handlePrevious() {
        setCurrentIndex(currentIndex => currentIndex === 0 ? images.length - 1 : currentIndex - 1)
    }
    function handleNext() {
        setCurrentIndex(currentIndex => currentIndex === images.length - 1 ? 0 : currentIndex + 1)
    }




    function renderingBox() {
        return (
            <div className="demo-box img-slider-comp">
                <div className="img-container" >
                    <BsArrowLeftCircleFill className="icon-prev icon" onClick={() => handlePrevious()} />
                    <BsArrowRightCircleFill className="icon-next icon" onClick={() => handleNext()} />
                    <div className="img-wrapper">
                        {images.map((image, index) => {
                        return (
                            <img key={image.id} src={image.download_url} alt={image.download_url} className={currentIndex === index ? "current-image active" : "current-image unactive"} />
                        )
                    })}
                    </div>
                    <div className="circle-indicators">
                        {(images && images.length) && images.map((_, ind) => <div key={ind} className={currentIndex === ind ? 'indicator active' : 'indicator unactive'} onClick={()=>{setCurrentIndex(ind)}}></div>)}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <Rendering data={data} demoBox={renderingBox()} />
    )
}

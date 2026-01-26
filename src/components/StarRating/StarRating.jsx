import "./_starRating.scss";
import { FaStar } from "react-icons/fa6";
import data from "./star-data";
import { useState } from "react";
import Rendering from "../RenderingComponent/Rendering";
export default function StarRating({ numOfStars = 7 }) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(false);
    function handleMouseMove(currentIndex) {
        setHover(currentIndex);
    }
    function handleMouseLeave() {
        setHover(rating);
    }

    const renderingContent = (
            <>
                {
                    [...Array(numOfStars)].map((_, ind) => {
                        let stars = ind + 1;
                        return (<FaStar key={stars}
                            onClick={() => { setRating(stars) }}
                            onMouseMove={() => handleMouseMove(stars)}
                            onMouseLeave={() => { handleMouseLeave() }}
                            className={stars <= (hover || rating) ? 'active' : 'inactive'}
                        />)
                    })
                }
            </>
        )
    

    return (
        <Rendering data={data} renderingComponent={renderingContent} className={"star-rating"} />

    )
}

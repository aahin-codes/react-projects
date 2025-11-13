import {  FaStar } from "react-icons/fa6";
import data from "./star-data";
import { useState } from "react";
import './_star-rating.scss';
import Rendering from "../rendering-component/rendering";
export default function StarRatingComp({numOfStars = 5}) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(false);
    function handleMouseMove(currentIndex){
        setHover(currentIndex);
    }
    function handleMouseLeave(){
        setHover(rating);
    }

    function renderingBox(){
        return(
             <div className="demo-box star-comp">
                                   {
                                    [...Array(numOfStars)].map((_,ind)=>{
                                        let stars = ind+1;
                                        return(<FaStar key={stars} 
                                            onClick={()=>{setRating(stars)}}
                                            onMouseMove={()=>handleMouseMove(stars)}
                                            onMouseLeave={()=>{handleMouseLeave()}}
                                            className={stars <= (hover || rating)?'active':'inactive'}
                                        />)
                                    })
                                    
                                    
                                   }
                                </div>
        )
    }
    
    return (
      <Rendering data={data} demoBox={renderingBox()}/>

    )
}

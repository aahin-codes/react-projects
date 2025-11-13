
import { IoLogoGithub } from "react-icons/io";
import { FaArrowLeftLong, FaStar } from "react-icons/fa6";
import data from "./star-data";
import { Link } from "react-router-dom";
import { useState } from "react";
import './_star-rating.scss';
export default function StarRatingComp({numOfStars = 5}) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(false);
    function handleMouseMove(currentIndex){
        setHover(currentIndex);
    }
    function handleMouseLeave(){
        setHover(rating);
    }
    
    return (
        <div className="rendering-comp">
            <div className="rendering-comp-wrapper">
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>
                                <FaArrowLeftLong /> Projects
                            </Link>
                        </li>
                        <li>
                            <IoLogoGithub className="github-icon" />
                        </li>
                    </ul>
                </nav>
                <div className="rendering-comp-content">
                    
                    {data.map((item) => {

                        return (
                            <div className="content" key={item.type}>
                                <h2>{item.title}</h2>
                                <p>{item.shortDescription}</p>
                                <p className="sub-title">Demo</p>
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
                                <p className="sub-title">Description</p>
                                <p>{item.description}</p>
                            </div>
                        );
                    }

                    )}

                </div>
            </div>
        </div>

    )
}

import { Routes, Route } from "react-router-dom";
import HomePage from "../homepage";
import ErrorPage from "../errorpage/errorpage";
import Accordion from "../accordion-component/accordion";
import RandomColorGenerator from "../random-color-generator-component/random-color-generator";
import StarRatingComp from "../star-rating-component/star-rating-comp";

export default function Approutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="project">
        <Route path="accordion" element={<Accordion/>} />
        <Route path="random-color-generator" element={<RandomColorGenerator/>} />
        <Route path="star-rating" element={<StarRatingComp/>} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

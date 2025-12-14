import { Routes, Route } from "react-router-dom";
import HomePage from "../homepage";
import ErrorPage from "../errorpage/errorpage";
import Accordion from "../accordion-component/accordion";
import RandomColorGenerator from "../random-color-generator-component/random-color-generator";
import StarRatingComp from "../star-rating-component/star-rating-comp";
import ImgSliderComp from "../image-slider-component/img-slider-comp";
import LoadMoreComponent from "../load-more-component/load-more-component";
import TreeviewComp from "../tree-view-component/treeview-comp";
import QrCodeGenerator from "../qr-code-generator/qr-code-generator";
import Theme from "../light-and-dark-mode/theme";
import ScrollIndicator from "../scroll-indicator/scroll-indicator";
import Tabs from "../custom-tabs/tabs";
import Modal from "../modal-popup/modal";
import GithubProfileFinder from "../github-profile-finder/github-profile-finder";

export default function Approutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="project">
        <Route path="accordion" element={<Accordion/>} />
        <Route path="random-color-generator" element={<RandomColorGenerator/>} />
        <Route path="star-rating" element={<StarRatingComp/>} />
        <Route path="image-slider" element={<ImgSliderComp/>} />
        <Route path="load-more" element={<LoadMoreComponent/>} />
        <Route path="tree-view" element={<TreeviewComp/>} />
        <Route path="qr-code" element={<QrCodeGenerator/>} />
        <Route path="theme-mode" element={<Theme/>} />
        <Route path="scroll-indicator" element={<ScrollIndicator/>} />
        <Route path="tabs" element={<Tabs/>} />
        <Route path="modal-popup" element={<Modal/>} />
        <Route path="github-profile-finder" element={<GithubProfileFinder/>} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

import { Routes, Route } from "react-router-dom";
import HomePage from "../homepage";
import ErrorPage from "../errorpage/errorpage";
import Accordion from "../accordion-component/accordion";

export default function Approutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="project/accordion" element={<Accordion/>} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

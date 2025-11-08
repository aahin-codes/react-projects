import { Routes, Route } from "react-router-dom";
import HomePage from "../homepage";
import ErrorPage from "../errorpage/errorpage";

export default function Approutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<ErrorPage />} />
      {/* <Route path="/project/:id" element={<ProjectPage />} /> */}
    </Routes>
  )
}

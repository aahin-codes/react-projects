import "./App.css";
import Approutes from "./routes/approutes.jsx";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter basename="/react-projects">
        <Approutes />
      </BrowserRouter>
    </>
  );
}

export default App;

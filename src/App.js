import "./App.css";
import Approutes from "./routes/approutes.jsx";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Approutes />
      </BrowserRouter>
    </>
  );
}

export default App;

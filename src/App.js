import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LandingGroup from "./pages/LandingGroup";

function App() {
  return (
    <div className="App bg-[#eeeff1]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="group" element={<LandingGroup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

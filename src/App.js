import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Contents from "./pages/Contents";
import Home from "./pages/Home";
import LandingGroup from "./pages/LandingGroup";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <div className="App bg-[#eeeff1]">
      <BrowserRouter>
        <Routes>
          <Route path="/" >
          <Route index element={<Home />} />
          <Route path="group" element={<LandingGroup />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="dashboard" element={<Contents type='dashboard' />} />
          <Route path="service" element={<Contents type='service' />} />
          <Route path="inventory" element={<Contents type='inventory' />} />
          <Route path="medical-record" element={<Contents type='medical-record' />} />
          <Route path="finance" element={<Contents type='finance' />} />
          <Route path="human-resource" element={<Contents type='human-resource' />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

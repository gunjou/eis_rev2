import "./App.css";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Contents from "./pages/Contents";
import Home from "./pages/Home";
import LandingGroup from "./pages/LandingGroup";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" >
          <Route index element={<Home />} />
          <Route path="/group" element={<LandingGroup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<Contents type='dashboard' />} />
          <Route path="/service" element={<Contents type='service' />} />
          <Route path="/inventory" element={<Contents type='inventory' />} />
          <Route path="/medical-record" element={<Contents type='medical-record' />} />
          <Route path="/finance" element={<Contents type='finance' />} />
          <Route path="/human-resource" element={<Contents type='human-resource' />} />
          <Route path='/404' element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

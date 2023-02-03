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
          <Route path="/live-reports" element={<Contents type='live-reports' />} />
          <Route path="/kunjungan" element={<Contents type='kunjungan' />} />
          <Route path="/pelayanan" element={<Contents type='pelayanan' />} />
          <Route path="/pendapatan" element={<Contents type='pendapatan' />} />
          <Route path="/pengeluaran" element={<Contents type='pengeluaran' />} />
          <Route path="/inventory" element={<Contents type='inventory' />} />
          <Route path="/kepegawaian" element={<Contents type='kepegawaian' />} />
          {/* <Route path="/indikator-pelayanan" element={<Contents type='indikator-pelayanan' />} /> */}
          {/* <Route path="/kepustakaan" element={<Contents type='kepustakaan' />} /> */}
          <Route path='/404' element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
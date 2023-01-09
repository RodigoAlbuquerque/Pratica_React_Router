
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import Vector from "./pages/Vector";
import Videos from "./pages/Videos";
import Psd from "./pages/PSD";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/photos" element={<Photos/>}/>
        <Route path="/psd" element={<Psd/>}/>
        <Route path="/videos" element={<Videos/>}/>
        <Route path="/vector" element={<Vector/>}/>
      </Routes>
    </Router>
  );
}


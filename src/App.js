import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter as Router
import Home from "./Pages/Home/Home";
import Agile from "./Pages/SDLC/Agile/Agile";
import Spiral from "./Pages/SDLC/Spiral/Spiral";
import Waterfall from "./Pages/SDLC/Waterfall/Waterfall";
import Error from "./Pages/Error/Error";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sdlc/agile" element={<Agile />} />
          <Route path="/sdlc/spiral" element={<Spiral />} />
          <Route path="/sdlc/waterfall" element={<Waterfall />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </Router>
  );
}

export default App;

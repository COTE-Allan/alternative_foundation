import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles/app.scss";
import Header from "./components/Header";
import Archives from "./components/Archives";
import Overlay from "./components/Overlay";
import ArchiveContent from "./components/ArchiveContent";

function App() {
  return (
    <Router>
      <div className="app">
        <Overlay />
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Archives />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/archives/:archiveID" element={<ArchiveContent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

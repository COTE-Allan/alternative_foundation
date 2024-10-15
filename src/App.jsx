import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./styles/app.scss";
import Header from "./components/Header";
import Archives from "./components/Archives";
import Overlay from "./components/Overlay";
import Home from "./components/Home";
import ArchiveContent from "./components/ArchiveContent";

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <Overlay />
      {/* Afficher le Header uniquement si la route actuelle n'est pas "/" */}
      {location.pathname !== "/" && <Header />}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/archives/:archiveID" element={<ArchiveContent />} />
        </Routes>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;

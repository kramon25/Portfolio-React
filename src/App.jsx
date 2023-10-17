import Navbar from "./navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

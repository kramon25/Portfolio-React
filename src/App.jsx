import Navbar from "./Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Home from "./components/Home";
import Certs from "./components/Certs";
import { Route, Routes } from "react-router-dom";
import "../src/style.css";

function App() {
  /*****************************/
  /* Making Mobile Nav Work */
  /*****************************/

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
          <Route path="/Certs" element={<Certs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

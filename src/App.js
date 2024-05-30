import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/index";
import About from "./pages/about/index";
import Projects from "./pages/projects/index";
import Contact from "./pages/contact/index";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

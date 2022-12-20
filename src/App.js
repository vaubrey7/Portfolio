import "./App.css";
import Work from "./components/Pages/Work";
import Resume from './components/Pages/Resume';
import Navbar from "./components/Nav/Navbar";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Github from "./components/Pages/Github";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/about"/>}
          />        
           <Route path="/Vaughns_Portfolio" element={<Navigate to="/about"/>}
          />          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/github' element={<Github />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
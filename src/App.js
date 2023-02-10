import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
// import Your all pages here
import Home from "./Home";
import About from  './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
      {/* Define your All Route Here */}
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route  path="/skills" element={<Skills/>} />
        <Route  path="/projects" element={<Projects/>} />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
    
    </div>
  );
}

export default App;

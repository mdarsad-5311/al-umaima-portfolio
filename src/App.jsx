
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact";
import Web from "./pages/services/Web"
import Digital from "./pages/services/Digital";
import { Routes, Route } from 'react-router-dom'
import WhyChooseUs from "./pages/WhyChooseUs"
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/web" element={<Web />} />
      <Route path="/digital" element={<Digital />} />
      <Route path="/whychooseus" element={<WhyChooseUs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
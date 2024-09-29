import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar"; // Pastikan path-nya benar
import About from './Deft/Pages/About';
import Home from "./Deft/Pages/Home";
import Contact from './dewa/pages/Contact';
import WorkPage from './dewa/pages/WorkPage';
import Services from './dewa/pages/Services'; 
// import WorkSinglePage from './dewa/pages/WorkSinglePage';

function App() {
  // usestate of nav
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Menggunakan Navbar / Footer wajib isi props seperti dibawah
    <BrowserRouter>
      <div>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} /> {/* Menampilkan Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/workPage" element={<WorkPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services/>} />
          {/* <Route path="/workSinglePage" element={<WorkSinglePage/>} /> */}

        </Routes>
        <Footer isOpen={isOpen} />
      </div>
    </BrowserRouter>
  );
}

export default App;

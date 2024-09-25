import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar"; // Pastikan path-nya benar
import Home from "./Deft/Pages/Home";
import Cta from "./Components/Cta";
import Footer from "./Components/Footer";
import WorkPage from './dewa/pages/WorkPage';

function App() {
  // usestate of nav
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Menggunakan Navbar / Footer wajib isi props seperti dibawah
    <BrowserRouter>
      <div>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/> {/* Menampilkan Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workPage" element={<WorkPage/>} />
        </Routes>
        <Footer isOpen={isOpen}/>
      </div>
    </BrowserRouter>
  );
}

export default App;

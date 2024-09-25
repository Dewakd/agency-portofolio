import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Pastikan path-nya benar
import Home from './Deft/Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />  {/* Menampilkan Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

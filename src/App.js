import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Projects from './pages/Projects/Projects';
import AboutMe from './pages/AboutMe/AboutMe';
import WhatIDo from './pages/WhatIDo/WhatIDo';
import Project from './pages/Project/Project';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Projects />} />

            <Route path="/about-me" element={<AboutMe />} />

            <Route path="/what-i-do" element={<WhatIDo />} />

            <Route path="/project/:id" element={<Project />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </main>

      <Footer />
    </>
  );
}

export default App;

import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Projects from './pages/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Projects />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </main>

      <Footer />
    </>
  );
}

export default App;

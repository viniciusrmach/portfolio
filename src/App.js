import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;

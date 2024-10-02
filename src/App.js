
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Footer from './Components/Footer';

import Navbar from './Components/Navbar';
import ExportImport from './pages/ExportImport';

function App() {
  return (
    <Router>
    <div>
    <Navbar/> {/* Navbar will always be visible */}
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/export-import" element={<ExportImport/>} />
        </Routes>
      </div>
    <Footer/>
    {/* Footer will always be visible */}
    </div>
  </Router>
  );
}

export default App;

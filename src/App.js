import React, { useState } from 'react';
import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons from react-icons library

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [textForDownload, setTextForDownload] = useState('');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([textForDownload], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "myTextFile.txt";
    element.click();
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <button style={{ position: "absolute" }} className='nabvar_btn' onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
      <button className='download_btn' onClick={handleDownload}>
        Download Text
      </button>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Layout />}>
            <Route path='/' element={<Home setTextForDownload={setTextForDownload} />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
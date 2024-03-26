import React, { useState } from 'react';
import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <button style={{position : "absolute"}} className='nabvar_btn' onClick={toggleDarkMode}>
        {darkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
      </button>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

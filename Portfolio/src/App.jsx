import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Connect from './components/Connect/Connect';
import Webdev from './components/Webdev/Webdev';
import Ui from './components/UI/Ui';
import Embedded from './components/Embedded/Embedded';
   
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/webdev" element={<Webdev />} />
          <Route path="/ui" element={<Ui />} />
          <Route path='/embedded' element={<Embedded />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';

import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import { Home, About, ManagerDashboard, Solutions, Contact } from './screens';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className='App'>
        <div className='navigation'>
          <Header />
        </div>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/hr-dashboard' element={<ManagerDashboard/>} />
            <Route path='/solutions' element={<Solutions />} />
            <Route path='/contact-us' element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

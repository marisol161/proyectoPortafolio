import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Index from './routes/Index';
import Projects from './routes/Projects';
import Certifications from './routes/Certifications';
import Skills from './routes/Skills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faCertificate, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <nav className='bg-black p-4 shadow-md'>
        <div className="container mx-auto px-4 py-3 flex justify-center items-center space-x-6">
          <NavLink to="/" className="flex flex-col items-center text-white hover:text-gray-200">
            <FontAwesomeIcon icon={faHome} className="text-2xl" />
            <span className="text-xs mt-1">Home</span>
          </NavLink>
          <NavLink to="/projects" className="flex flex-col items-center text-white hover:text-gray-200">
            <FontAwesomeIcon icon={faBriefcase} className="text-2xl" />
            <span className="text-xs mt-1">Projects</span>
          </NavLink>
          {/* <NavLink to="/contactos" className="flex flex-col items-center text-white hover:text-gray-200">
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
            <span className="text-xs mt-1">Contact</span>
          </NavLink> */}
          <NavLink to="/certifications" className="flex flex-col items-center text-white hover:text-gray-200">
            <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
            <span className="text-xs mt-1">Certifications</span>
          </NavLink>
          <NavLink to="/skills" className="flex flex-col items-center text-white hover:text-gray-200">
            <FontAwesomeIcon icon={faLaptopCode} className="text-2xl" />
            <span className="text-xs mt-1">Skills</span>
          </NavLink>
        </div>
      </nav>

      <main className='flex-grow container mx-auto p-4'>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/certifications' element={<Certifications />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </main>
      <footer className='bg-black p-4 text-center text-white mt-auto'>
  © 2024 rosaldomx.dev
</footer>



    </div>
  );
}

export default App;

import React, { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Home from  './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from  './pages/Resume';
import Footer from './Footer'
import '../App.css';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />
    }
    if (currentPage === 'AboutMe') {
      return <AboutMe />
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />
    }
    if (currentPage === 'ContactMe') {
      return <ContactMe />
    }
      return <Home />

  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      {Footer()}
    </div>
  );
};

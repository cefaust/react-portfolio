import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='container header'>
      <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
        <div  className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <h1 className='fs-1'>Christopher Faust</h1>
        </div>

        <ul className='nav nav-pills'>
          <li className='nav-item'>
            <a href='#Home'
               onClick={() => handlePageChange('Home')}
               className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} aria-current="page"
            >
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='#AboutMe'
               onClick={() => handlePageChange('AboutMe')}
               className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
            >
              About Me
            </a>
          </li>
          <li className='nav-item'>
            <a href='#Portfolio'
               onClick={() => handlePageChange('Portfolio')}
               className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>
          <li className='nav-item'>
            <a href='#ContactMe'
               onClick={() => handlePageChange('ContactMe')}
               className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}
            >
              Contact Me
            </a>
          </li>
          <li className='nav-item'>
            <a href='#Resume'
               onClick={() => handlePageChange('Resume')}
               className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </li>
        </ul>
      </header>
    </div>
  )
}
export default NavTabs;

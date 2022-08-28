import React from 'react';
import gitHub from '../img/github.png'
import linkedIn from '../img/linkedin.png'


export default function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-muted"> Made with ❤️ by Christopher Faust</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="" href= "https://www.linkedin.com/in/christopher-faust-348b89233" target='_blank' rel='noreferrer'>
              <img className="footerImg" src={linkedIn} alt="linkedIn link" />
            </a>
          </li>
          <li className="ms-3">
            <a className="" href= "https://github.com/cefaust" target='_blank' rel='noreferrer'>
              <img className="footerImg" src={gitHub} alt="GitHub link" />
          </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

import React, { useState } from 'react';
import {validateEmail} from '../utils/helpers';
import phoneImg from '../../img/call-me-icon-22.jpg'
import mailImg from '../../img/mail-1008.png'

export default function ContactMe() {
  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'userName') {
      setName(inputValue);
    } else if (inputType === 'email') {
      return setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or name is invalid');
    return;
    }
    if (!message) {
      setErrorMessage('Message required')
      return;
    }


    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div>
      <h1 className='pageHeader'>Contact Me</h1>
      <form>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label pageHeader">Name</label>
        <input value={userName} name= 'userName' onChange={handleInputChange} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label pageHeader">Email address</label>
        <input value={email} name= 'email' onChange={handleInputChange} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label pageHeader">Message</label>
        <textarea value={message} name= 'message' onChange={handleInputChange} type='text' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" onClick={handleFormSubmit} className="btn btn-primary mb-3">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text pageHeader">{errorMessage}</p>
        </div>
      )}
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a className="emailLink" href= "mailto:hello@chrisfaust.dev" target='_blank' rel='noreferrer'> Email Me
            <img className="footerImg" src={mailImg} alt="email link" />
          </a>
        </li>
        <li className="ms-3 emailLink">
          (360) 747-7304
            <img className="footerImg" src={phoneImg} alt="phone" />

        </li>
      </ul>
    </div>
  )
}

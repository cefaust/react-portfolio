import React from 'react';


export default function AboutMe() {
  return (
    <div>
      <h1 className='pageHeader'>About Me</h1>
      <div className="row row-cols-1 g-4">
        <div className="col">
          <div className="card">
              <div className="card-body aboutMeCard">
                <h5 className="card-title textColor">About Chris</h5>
                <p className="card-text textColor">Hello, I'm Chris. I am a dispatch Supervisor at Waste Connections. I have a passion for
                software engineering.  I am aspiring to become a Full Stack Web Developer. I love my family and spending time
                with them is my favorite thing to do. I hope the person reading this will hire me and let me prove that I am the asset
                the company is looking for.</p>
              </div>
          </div>
        </div>
        <div className="col ">
          <div className="card border-light">
              <div className="card-body aboutMeCard">
                <h5 className="card-title textColor">Skills/tools</h5>
                <p className="card-text textColor">I am proficient with</p>
                  <ul className="list-group list-group-flush" >
                    <li id="aboutMeList" className="list-group-item" >JavaScript</li>
                    <li id="aboutMeList" className="list-group-item">React</li>
                    <li id="aboutMeList" className="list-group-item">Node</li>
                    <li id="aboutMeList" className="list-group-item">Bootstrap</li>
                    <li id="aboutMeList" className="list-group-item">Express</li>
                    <li id="aboutMeList" className="list-group-item">Mongo</li>
                    <li id="aboutMeList" className="list-group-item">MySQL</li>
                    <li id="aboutMeList" className="list-group-item">HTML5</li>
                    <li id="aboutMeList" className="list-group-item">CSS</li>
                  </ul>
              </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
              <div className="card-body aboutMeCard">
                <h5 className="card-title textColor">Hobbies/Interest</h5>
                <p className="card-text textColor">List of My Hobbies/ Interest </p>
                <ul className="list-group list-group-flush" >
                  <li id="aboutMeList" className="list-group-item" >Movies</li>
                  <li id="aboutMeList" className="list-group-item" >Advancing my skills as a Developer</li>
                  <li id="aboutMeList" className="list-group-item">Video Games</li>
                  <li id="aboutMeList" className="list-group-item">Going to the Beach</li>
                  <li id="aboutMeList" className="list-group-item">Leaning as much as possible in this Life time!</li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

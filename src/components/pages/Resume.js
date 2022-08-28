import React from 'react';
import resume from '../../img/Resume.pdf';

export default function Resume() {
  return (
    <div>
      <h1 className='pageHeader'>Resume</h1>
      <h3 className='textColor'>Download My <a className= 'resumeLink' href={resume} target='_blank' rel='noreferrer'>Resume</a></h3>
      <div className="card border-0 resumeList">
        <div className="card-body resumeList">
          <h5 className="card-title">Front-End Proficiencies</h5>
        </div>
        <ul  className="list-group list-group-flush">
          <li id='resumeLi' className="list-group-item resumeList">HTML</li>
          <li id='resumeLi' className="list-group-item">CSS</li>
          <li id='resumeLi' className="list-group-item">Javascript</li>
          <li id='resumeLi' className="list-group-item">responsive design</li>
          <li id='resumeLi' className="list-group-item">React</li>
          <li id='resumeLi' className="list-group-item">Bootstrap</li>
        </ul>
      </div>
      <div className="card border-0 resumeList">
        <div className="card-body resumeList">
          <h5 className="card-title">Back-End Proficiencies</h5>
        </div>
        <ul  className="list-group list-group-flush">
          <li id='resumeLi' className="list-group-item resumeList">APIs</li>
          <li id='resumeLi' className="list-group-item">Node</li>
          <li id='resumeLi' className="list-group-item">Express</li>
          <li id='resumeLi' className="list-group-item">MySql, Sequelize</li>
          <li id='resumeLi' className="list-group-item">MongoDB, Mongoose</li>
          <li id='resumeLi' className="list-group-item">Rest</li>
          <li id='resumeLi' className="list-group-item">GraphQL</li>
        </ul>
      </div>
    </div>
  );
}

import React from 'react';
import me from '../../img/self.jpeg'

export default function Home() {
  return (
    <div className="row row-cols-1">
      <h1 class= 'pageHeader' >Home</h1>
      <div className="card mb-3" style={{ border: 'none'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={me} className="img-fluid rounded-start" alt="A pic of Chris"/>
          </div>
          <div className="col-md-8 homeCard">
            <div className="card-body">
              <h4 className="card-title">Hi, My name is Chris Faust</h4>
              <p className="card-text">I am a Full Stack Web Developer.</p>
              <p className="card-text">Based in the US</p>
              <p className="card-text">I am a Dispatch Supervisor at Waste Connections</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

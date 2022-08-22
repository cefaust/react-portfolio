import React from 'react';
import me from '../../img/self.jpg'

export default function Home() {
  return (
    <div>
      <h1 class= 'homePageHeader' >Home</h1>
      <div className="card mb-3 " style={{maxWidth: '360px'}}>
        <div className="row g-0 justifyContentCenter">
          <div className="col-md-4">
            <img src={me} className="img-fluid rounded-start" alt="A pic of Chris"/>
          </div>
          <div className="col-md-8 homeCard">
            <div className="card-body">
              <h5 className="card-title">Hi, My name is Chris Faust</h5>
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

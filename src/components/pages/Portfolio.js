import React from 'react';
import noteTaker from '../../projects/NoteTaker.png'
import techBlog from '../../projects/TechBlog.png'
import textEditor from '../../projects/textEditor.png'
import lifePlanner from '../../projects/LifePlanner.png'
import socialNetwork from '../../projects/SocialNetwork.png'
import weatherDashboard from '../../projects/WeatherDashboard.png'

export default function Portfolio() {
  return (
    <div>
      <h1 className='pageHeader'>Portfolio</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card text-bg-dark border-0">
              <div id='portfolioLink' className="card-header text-center">
               Note Taker
              </div>
            <img id='portfolioImg' src={noteTaker}  className="card-img" alt="..."/>
            <div id='cardBackground' className="card-body">
              <a id="portfolioLink" className="btn btn-link" href="https://cefaust-note-taker.herokuapp.com/"  target= '_blank' rel= 'noreferrer'
              >Deployed Note Taker
                </a>
              <a id='portfolioLink' href="https://github.com/cefaust/note-taker" className="btn btn-link" target= '_blank' rel= 'noreferrer'
              >GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-bg-dark border-0">
            <div id='portfolioLink' className="card-header text-center">
              Tech Blog
            </div>
            <img id='portfolioImg' src={techBlog}  className="card-img" alt="..."/>
            <div id='cardBackground' className="card-body">
              <a id="portfolioLink" className="btn btn-link" href="https://tech-blog-97369.herokuapp.com/"  target= '_blank' rel= 'noreferrer'
              >Deployed Tech Blog
              </a>
              <a id='portfolioLink' href="https://github.com/cefaust/tech-blog" className="btn btn-link" target= '_blank' rel= 'noreferrer'
              >GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-bg-dark border-0">
            <div id='portfolioLink' className="card-header text-center">
              Text Editor PWA
            </div>
            <img id='portfolioImg' src={textEditor}  className="card-img" alt="..."/>
            <div id='cardBackground' className="card-body">
              <a id="portfolioLink" className="btn btn-link" href="https://cefaust-text-editor-pwa.herokuapp.com/"  target= '_blank' rel= 'noreferrer'
              >Deployed Text Editor PWA
              </a>
              <a id='portfolioLink' href="https://github.com/cefaust/text-editor-pwa" className="btn btn-link" target= '_blank' rel= 'noreferrer'
              >GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-bg-dark border-0">
            <div id='portfolioLink' className="card-header text-center">
              Life Planner
            </div>
            <img id='portfolioImg' src={lifePlanner}  className="card-img" alt="..."/>
            <div id='cardBackground' className="card-body">
              <a id="portfolioLink" className="btn btn-link" href="https://life-planner.pages.dev/"  target= '_blank' rel= 'noreferrer'
              >Deployed Life Planner
              </a>
              <a id='portfolioLink' href="https://github.com/cefaust/life-planner" className="btn btn-link" target= '_blank' rel= 'noreferrer'
              >GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-bg-dark border-0">
            <div id='portfolioLink' className="card-header text-center">
              Social Network API
            </div>
            <img id='portfolioImg' src={socialNetwork}  className="card-img" alt="..."/>
            <div id='cardBackground' className="card-body">
              <a id="portfolioLink" className="btn btn-link" href="https://www.youtube.com/watch?v=WFr8XdcaQy4&t=4s"  target= '_blank' rel= 'noreferrer'
              >Social Network API video of backend
              </a>
              <a id='portfolioLink' href="https://github.com/cefaust/social-network-api" className="btn btn-link" target= '_blank' rel= 'noreferrer'
              >GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-bg-dark border-0">
            <div id='portfolioLink' className="card-header text-center">
              Weather Dashboard
            </div>
            <img id='portfolioImg' src={weatherDashboard}  className="card-img" alt="..."/>
            <div id='cardBackground' className="card-body">
              <a id="portfolioLink" className="btn btn-link" href="https://cefaust.github.io/weather-dashboard/"  target= '_blank' rel= 'noreferrer'
              >Deployed Weather Dashboard
              </a>
              <a id='portfolioLink' href="https://github.com/cefaust/weather-dashboard" className="btn btn-link" target= '_blank' rel= 'noreferrer'
              >GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

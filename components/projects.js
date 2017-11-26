import React from 'react'
import Link from 'next/link'

class WebProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }
  
  render() {
    return(
      <div className="projects-container">
        <div className="project-container">
          <div className="project-overlay aoweb"></div>
            <div className="project-data">
              <h3>Argentum Online Web </h3>
            </div>
          <img src="/static/aoweb.jpg" />
        </div>
        <div className="project-container">
          <div className="project-overlay tanIntensa"></div>
          <div className="project-data">
            <h3>Tan Intensa </h3>
          </div>
          <img src="/static/tanintensa.jpg" />        
        </div>
        <div className="project-container">
          <div className="project-overlay lutionAds"></div>
          <div className="project-data">
            <h3>Lution Ads</h3>
          </div>
          <img src="/static/LutionAds.jpg" />     
        </div>
        <div className="project-container">
          <div className="project-overlay tanIntensa"></div>
          <div className="project-data">
            <h3>Twitter List</h3>
          </div>
          <img src="/static/twitterlist.jpg" />     
        </div>
        <style jsx>{`
          .projects-container {
            max-width: 1100px;
            height: 600px;
            margin: auto;
            display: flex;
            flex-wrap: wrap;
          }
          .project-container {
            width: 50%;
            min-width: 550px;
            position: relative;  
            margin: auto;
            height: 500px;
            overflow: hidden;
            cursor: pointer;
          }
          
          .project-container:hover img {
            transform: scale(1.1);
          }

          .project-data {
            position: absolute;
            z-index: 10;
            top: 20px;
            color: #444;
            left: 60px;
            font-size: 24px;
          }
          
          .project-container img {
            max-width: 100%;
            transition: all 0.3s;
          }
        `}</style>
      </div>
    )
  }
}

export default WebProjects;
import React from 'react'
import Link from 'next/link'

class WebNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div className="social-container">
        <a href="https://twitter.com/_JuanGallo" target="_blank">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/J-Gallo" target="_blank">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/juangallo/" target="_blank">        
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="https://medium.com/@_JuanGallo" target="_blank">              
          <i className="fa fa-medium" aria-hidden="true"></i>
        </a>
        <style jsx>{`
          .social-container {
            max-width: 600px;
            margin: 40px auto;
            height: 30px;
            text-align: center; 
          }
          
          i {
            font-size: 30px;
            margin: 0 20px;
            color: #999;
            cursor: pointer;
          }

          .fa-twitter:hover {
            color: #1ea0f2;
            transition: color 200ms linear;
          }

          .fa-github:hover {
            color: #000;
            transition: color 200ms linear;
          }

          .fa-linkedin:hover {
            color: #0077b4;
            transition: color 200ms linear;            
          }

          .fa-medium:hover {
            color: #00ab6c;
            transition: color 200ms linear;
          }
        `}</style>
      </div>
    )
  }
}

export default WebNavbar;
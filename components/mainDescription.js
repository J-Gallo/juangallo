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
      <div className="mainDescription-container">
        <h2>Fullstack engineer from Buenos Aires, Argentina. Passionate about web development, 
          web performance and artificial intelligence. 
          <p>
            Currently working as CEO @ Regalandolo
          </p>
        </h2>
        <style jsx>{`
          .mainDescription-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 0 20px;
            text-align: center;
          }
          h2 {
            text-align: justify;
            font-weight: lighter;
            line-height: 30px;
          }

          h2 p {
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
}

export default WebNavbar;

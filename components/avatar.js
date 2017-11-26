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
      <div className="avatar-container">
        <img src='/static/perfil2.jpg' alt="Imagen de Juan Gallo"/>
        <style jsx>{`
          .avatar-container {
            width: 250px;
            height: 250px;
            margin: 50px auto;
          }
          
          img {
            max-width: 250px;
            border-radius: 50%;
          }
        `}</style>
      </div>
    )
  }
}

export default WebNavbar;
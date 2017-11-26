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
      <div className="nav-container">
        <nav>
          <Link href="/">
            <h1>Juan Gallo</h1>
          </Link>
        </nav>
        <style jsx>{`
          .nav-container {
            width: 100%;
            height: 70px;
            background-color: #222;
          }

          nav {
            width: 100%;
            height: 70px;
            background-color: #222;
            display: flex;
            font-size: 14px;
            text-align: center;
            margin: auto;
          }

          h1 {
            color #f3f3f3;
            width: 110px;
            margin: auto;
            cursor: pointer;
          }

          .left-transition {
            animation-delay: 2s;
            display: inline-block;
            margin-left: 49%;
            animation: left-slide 1s forwards;
          }

          .right-transition {
            animation-delay: 2s;
            display: inline-block;
            float: right;
            margin-right: 49%;
            animation: right-slide 1s forwards;
          }
        `}</style>
      </div>
    )
  }
}

export default WebNavbar;
import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'
import HeadTag from '../components/Head'
import Navbar from '../components/navbar'
import Avatar from '../components/avatar'
import MainDescription from '../components/mainDescription'
import Social from '../components/social'
import Projects from '../components/projects'

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }
  
  render() {
    return(
      <div>
        <HeadTag />
        <Navbar />
        <Avatar />
        <MainDescription />
        <Social />
        <p>Projects</p>
        <Projects />

        <style jsx>{`
          p {
            text-align: center;
            font-size: 40px;
            margin-top: 100px;
          }
        `}</style>
        <style global jsx>{`
          body {
            font-family: 'Asap', sans-serif;
            background-color: #fefdfe;
            margin: 0;
            padding: 0;
          }
        `}</style>
      </div>
    )
  }
}

export default Items;
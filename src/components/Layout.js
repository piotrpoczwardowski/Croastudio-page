import React from 'react'
import Navigation from './Navigation'
import VideoBackground from './VideoBackground'
import '../styles/layout.scss'


class Layout extends React.Component {
    render() {



      return (
          <div className='layout'>
              
              
              <Navigation/>
             
              <VideoBackground/>
              {this.props.children}
             
          </div>
      )
    }
  }

  export default Layout
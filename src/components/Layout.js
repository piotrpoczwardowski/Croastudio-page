import React from 'react'
import Navigation from './Navigation'
import VideoBackground from './VideoBackground'

class Layout extends React.Component {
    render() {



      return (
          <div>
              
              <Navigation/>
             
              <VideoBackground/>
              {this.props.children}
             
          </div>
      )
    }
  }

  export default Layout
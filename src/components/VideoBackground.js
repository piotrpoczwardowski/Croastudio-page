import React from 'react'
import Video from '../images/video.mp4'
import '../styles/VideoBackground.scss'
class VideoBackground extends React.Component {

    componentDidMount(){
       
    }
    render() {

        

      return (
          <div className="contener">
          <video className='contener__video' muted="muted" autoPlay loop>
        <source src={Video} type="video/mp4" />
        <source src="car.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
     
          </div>
      )
    }
  }

  export default VideoBackground
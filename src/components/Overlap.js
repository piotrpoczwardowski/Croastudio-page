import React from 'react'


class Overlap extends React.Component {
    render() {



      return (
          <div className='overlap'>
              <h2>{this.props.header}  </h2>
              <h3>{this.props.description}</h3>
              
             
          </div>
      )
    }
  }

  export default Overlap
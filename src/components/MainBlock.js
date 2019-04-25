import React from "react"
import '../styles/MainBlock.scss'


class MainBlock extends React.Component {
  render() {
    
    return (
      <div style={this.props.style} className="mainBlock">
        <h2 >{this.props.header}</h2>
        <h3 >{this.props.description}</h3>
      </div>
    )
  }
}

export default MainBlock

import React from "react"
import "../styles/offerBlock.scss"
import offerBlock1 from '../images/offerBlock1.png'

class OfferBlock extends React.Component {


  render() {
    console.log(this.props)
    let props = this.props.styles
    return (
        
      <div  className="contener__block">
      <div  className="block__title">
     {props.subtitle} {props.title}
      </div>
      <div style={{color: props.color}} className="block__price">
      od 50,-
      </div>
     <div className="block__list">
     fdsf
     </div>
      </div>
    )
  }
}

export default OfferBlock

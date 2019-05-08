import React from 'react'
import '../components/SideMenu.scss'
import facebook from '../images/sideMenu/facebook.png'
import instagram from '../images/sideMenu/instagram.png'
import behance from '../images/sideMenu/behance.png'
import github from '../images/sideMenu/github.png'


class SideMenu extends React.Component {
    render() {



      return (
          
          <div className='sideMenu'>
              <p><strong>Znajdziesz też nas na</strong></p>
             <div className="sideMenu__links">
              <a target="_blank" href="https://www.facebook.com/croastudioprojektowaniawww/"><img src={facebook} alt="facebook icon"/></a>
              <a target="_blank" href="https://www.instagram.com/croastudio/"><img src={instagram} alt="instagram icon"/></a>
              <a target="_blank" href="https://www.behance.net/gallery/79732969/Cooking-e-book-project"><img src={behance} alt="behance icon"/></a>
              <a target="_blank" href="https://github.com/piotrpoczwardowski"><img src={github} alt="github icon"/></a>
              </div>
          </div>
      )
    }
  }

  export default SideMenu
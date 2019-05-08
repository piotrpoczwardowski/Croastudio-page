import React from 'react'
import Logo from '../images/logo.png'
import '../styles/Navigation.scss'
import { a } from "gatsby"
import { FaBars } from 'react-icons/fa';


class Navigation extends React.Component {

  componentDidMount(){
    let navigation = document.querySelector('.navigation')
    let links = document.querySelectorAll('.navigation__links a')
    let nav = document.querySelector('.navigation__links')

    links.forEach(function(link){
      link.addEventListener('click', function(){
        nav.classList.remove('show')
      })
    })

    window.addEventListener('scroll', function(){
      
      if(this.window.scrollY > 100){
        navigation.style.background = 'white'
        
      } else{
        navigation.style.background = 'none'
      }
    })

    
  }

  showMenu = () => {
    let nav = document.querySelector('.navigation__links')
    nav.classList.toggle('show')
  }
    render() {

      
     
      return (
          <div className="navigation">
          <img className="navigation__logo" src={Logo} alt=""/>
          <div className="navigation__links">
          <a href='#whyUs' className="portfolio">Start</a>
          <a href='#gallery' className="price">Galeria</a>
         
          <a href='#offer' className="offer">Cennik</a>
         
          
          <a href='#contact' className="contact">Kontakt</a>
          </div>
         <div onClick={this.showMenu} className="hamburgerMenu">
         <FaBars />
         </div>
          </div>
      )
    }
  }

  export default Navigation
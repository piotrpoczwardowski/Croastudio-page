import React from 'react'
import Logo from '../images/logo.png'
import '../styles/Navigation.scss'
import { Link } from "gatsby"


class Navigation extends React.Component {

  componentDidMount(){
    let navigation = document.querySelector('.navigation')
    window.addEventListener('scroll', function(){
      
      if(this.window.scrollY > 100){
        navigation.style.background = 'white'
      } else{
        navigation.style.background = 'none'
      }
    })
  }
    render() {


      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
      return (
          <div className="navigation">
          <img className="navigation__logo" src={Logo} alt=""/>
          <div className="navigation__links">
          <Link to='' className="portfolio">Portfolio</Link>
          <Link to='' className="offer">Oferta</Link>
          <Link to='' className="about">O nas</Link>
          <Link to='' className="price">Cennik</Link>
          <Link to='' className="contact">Kontakt</Link>
          </div>
         
          </div>
      )
    }
  }

  export default Navigation
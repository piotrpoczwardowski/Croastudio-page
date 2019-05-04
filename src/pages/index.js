import React from "react"
import { Link } from "gatsby"
import "../styles/index.scss"
import Layout from "../components/Layout"
import Typing from "react-typing-animation"
import Girl from "../images/girl.png"
import Man from "../images/man.png"
import circle from "../images/circle.png"
import star from "../images/star.png"
import octagon from "../images/octagon.png"
import profi from "../images/galleryProfi.png"
import start from "../images/galleryStart.png"
import leaf1 from "../images/leaf1.png"
import leaf2 from "../images/leaf2.png"
import leaf3 from "../images/leaf3.png"
import { FaChevronCircleDown } from "react-icons/fa"
import { Helmet } from "react-helmet"
import SideMenu from "../components/SideMenu"
import { offerBlock1, offerBlock2, offerBlock3 } from "../components/Arrays"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Helmet
      title="Strony WWW-Projektowanie stron www"
      meta={[
        { name: "description", content: "Strony WWW - Projektowanie stron www, responsywne, nowoczesne, grafika" },
        { name: "keywords", content: "...." },
      ]}
    />

    <div className="welcome">
      <div className="welcome__text">
        <div className="type">
          Strona www dla Ciebie
          {/* <Typing speed={50} loop>
       Potrzebujesz <br/> stronę <br/> www? 
        <Typing.Backspace count={29} delay={1000}/>
        Brak <br/> pomysłu?
        <Typing.Backspace count={24} delay={1000}/>
        Zrobimy to za Ciebie!
        <Typing.Backspace count={24} delay={1000}/>
      </Typing> */}
        </div>

        <div className="welcome__button">
          <button>
            <a className='offer__button' href="#offer"> Poznaj ofertę!</a> <a className='contact__button' href="#contact"> Skontaktuj się z nami!</a>
          </button>
        </div>
      </div>
      <div className="welcome__arrow">
        <a href="#whyUs">
          <FaChevronCircleDown />
        </a>
      </div>
    </div>
    <div id="whyUs" className="whyUs">
      <div className="whyUs__text">
        <h2>Witaj na naszej stronie!</h2>
        <p>
          Dlaczego my? Do każdego projektu podchodzimy indywidualnie. Stawiamy
          na jakość. Jesteśmy na bieżąco z nowymi trendami. Sprawdź nas!
        </p>
      </div>
      <div className="whyUs__image">
        <img src={Girl} alt="" />
      </div>
    </div>
    <div className="description">
      <div className="description__image">
        <img src={Man} alt="" />
      </div>
      <div className="description__text">
        <h2>Strona WWW</h2>

        <p>
          Strona jest wizytówką twojej firmy 24/h. Tworzymy nowoczesne strony, 
          łatwe w nawigacji, przyjazne dla potencjalnego klienta.
        </p>
        <h3>W cenie każdego projektu:</h3>
        <p>
          technologia(RWD) responsywność dzięki, której twoja strona wyświetla
          się na każdym ekranie komputera i urządzenia mobilnego.
        </p>
      </div>
    </div>
    <div id="graphic" className="graphic">
      <h2>Grafika</h2>
      <div className="graphic__circle">
        <div className="circle__text">
          <p>
            Dobry design to podstawa. Szukasz nietypowego projektu? Zaprojektuje
            dla Ciebie Twoje wymarzone logo, baner czy wizytówkę.
          </p>
          <p>
            W grafice wykorzystujemy nie tylko grę słów i kolorów, ale też
            efekty i ruchy animacji, które przyciągają wzrok.
          </p>
          <h3>Konsultacja i wstępny szkic jest bezpłatny.</h3>
          <p>Porozmawiajmy o twoim projekcie!</p>
        </div>
      </div>
    </div>
    <div id="gallery" className="gallery">
      <div className="gallery__title">
        <h2>Galeria</h2>
      </div>
      <div className="gallery__blocks">
        <div className="gallery__block">
          <a target="_blank" href="https://www.firmaprofi.com.pl/">
            <img src={profi} alt="" />
            <h3>Projekt strony www firma profi</h3>
          </a>
        </div>

        <div className="gallery__block">
          <a target="_blank" href="https://stoic-tesla-57b834.netlify.com/">
            <img src={start} alt="" />
            <h3>Landing page</h3>
          </a>
        </div>
      </div>
    </div>
    <div id="offer" className="offer__title">
      <h2>Oferta</h2>
    </div>
    <div className="offer__section">
      <div className="offer__block">
        <div className="block__title">
          PROSTA STRONA <br />
         <div className="block__title--thin">(typu landing page)</div> 
        </div>
        <div style={{ color: "#6F3996" }} className="block__price">
          od 399,-
        </div>
        <div className="benefits">
          {offerBlock1.map(benef => (
            <div className="benefit">
            <div className="benefit__img">  <img src={benef.img} alt="" /></div>
              <div className="benefit__text">{benef.text}</div>
            </div>
          ))}
          
        </div>
      </div>
      <div className="offer__block">
        <div style={{ marginTop: "10px" }} className="block__title">
          GRAFIKA
        </div>
        <div style={{ color: "#8ED2C8" }} className="block__price">
          od 50,-
        </div>
        <div className="benefits">
          {offerBlock2.map(benef => (
            <div className="benefit">
            <div className="benefit__img">  <img src={benef.img} alt="" /></div>
              <div className="benefit__text">{benef.text}</div>
            </div>
          ))}
          
        </div>
      </div>
      <div className="offer__block">
        <div className="block__title block__title--flex">
          <span className="title1">
            Dobry <br /> wybór
          </span>
          <span className="title2">STRONA PREMIUM</span>
        </div>
        <div style={{ color: "#5055A5" }} className="block__price">
          od 999 .-
        </div>
        <div className="benefits">
          {offerBlock3.map(benef => (
            <div className="benefit">
            <div className="benefit__img">  <img src={benef.img} alt="" /></div>
              <div className={benef.img === '' ? 'benefit__text--add' : 'benefit__text'}>{benef.text}</div>
            </div>
          ))}
          
        </div>
      </div>
    </div>

    <div id="contact" className="contact__section">
      <h2>Kontakt</h2>
      <div>
        <p>
          Jesteśmy z Trójmiasta. <br /> Chcesz umówić się na spotkanie? <br />{" "}
          Albo po prostu porozmawiać? <br /> Zadzwoń!
        </p>

        <p>
          <strong>
            {" "}
            Numer <br />{" "}
          </strong>
          534-429-916
        </p>
        <p>
          <strong>
            {" "}
            Email <br />{" "}
          </strong>
          croadesigners@gmail.com
        </p>
        <SideMenu />
      </div>
      <div className="leafs">
        <img src={leaf1} alt="" className="leaf1" />
        <img src={leaf2} alt="" className="leaf2" />
        <img src={leaf3} alt="" className="leaf3" />
      </div>
    </div>
  </Layout>
)

export default IndexPage

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

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="welcome">
      <div className="welcome__text">
        <div className="type">
          Zrobimy to <br/> za Ciebie
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
          <button>Poznaj ofertę!</button>
        </div>
      </div>
      <div className="welcome__arrow" />
    </div>
    <div className="whyUs">
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
          technologia(RWD) responsywność dzięki,której twoja strona wyświetla
          się na każdym ekranie komputera i urządzenia mobilnego.
        </p>
      </div>
    </div>
    <div className="graphic">
      <h2>Grafika</h2>
      <div className="graphic__circle">
        <div className="circle__text">
          <p>
            Dobry design to podstawa. Szukasz nietypowego projektu? Zaprojektuje
            dla Ciebie Twoje wymarzone logo,baner czy wizytówkę.
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

    <div className="offer__section">
      <div className="offer__block">
        <div className="block__background" />
        <div className="block__foreground">
          <div className="foreground__image">
            <img src={circle} alt="" />
          </div>
          <div className="foreground__text">
            <p> PROSTA STRONA WWW - LANDING PAGE </p>

            <p>
              {" "}
              GRATIS <br />
              -formularz kontaktowe <br />
              -interaktywna mapa <br />
              -proste logo <br />
            </p>
            <p>400-600,-</p>
          </div>
        </div>
      </div>
      <div className="offer__block">
        <div className="block__background" />
        <div className="block__foreground">
          <div className="foreground__image">
            <img src={octagon} alt="" />
          </div>
          <div className="foreground__text">
            <p> PROSTA STRONA WWW - LANDING PAGE </p>

            <p>
              {" "}
              GRATIS <br />
              -formularz kontaktowe <br />
              -interaktywna mapa <br />
              -proste logo <br />
            </p>
            <p>400-600,-</p>
          </div>
        </div>
      </div>
      <div className="offer__block">
        <div className="block__background" />
        <div className="block__foreground">
          <div className="foreground__image">
            <img src={star} alt="" />
          </div>
          <div className="foreground__text">
            <p> PROSTA STRONA WWW - LANDING PAGE </p>

            <p>
              {" "}
              GRATIS <br />
              -formularz kontaktowe <br />
              -interaktywna mapa <br />
              -proste logo <br />
            </p>
            <p>400-600,-</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

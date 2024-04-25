import "./App.css";
import React, { Fragment, useState } from "react";
import picture from "./img/suitboy.jpg";
import icon from "./img/favicon.ico";
import cvv from "./img/Cvv.pdf";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <Fragment>
      {/* navbar section */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={icon} alt="logo" />
        </div>
        <ul className={showMenu ? "navbar-links active" : "navbar-links"}>
          <li>
            <a href="#">Home</a>
            <a href="#service">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={showMenu ? "line line1 active" : "line line1"}></div>
          <div className={showMenu ? "line line2 active" : "line line2"}></div>
          <div className={showMenu ? "line line3 active" : "line line3"}></div>
        </div>
      </nav>
      {/*Service*/}
      <div className="hero-image">
        <div className="about-me">
          <div className="row">
            <label>My Name is Israel</label>
          </div>
        </div>
      </div>

      <div classNameName="main-content">
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />

        <section id="service" className="services section">
          <h2 className="section__title">
            The Services <br />I Offer
          </h2>

          <div className="services__container container grid">
            <article className="services__card">
              <i className="ri-code-s-slash-line services__icon"></i>
              <h2 className="services__title">Web Developper</h2>
              <p className="services__description">
                Get an exceptional, secured and fully functional website/web
                application for your businesses
              </p>

              <button className="services__button button">Know More</button>
              {/*<!-- Modal 1 -->*/}
              <div className="services__modal">
                <div className="services__modal-content">
                  <i className="ri-close-line services__modal-close"></i>

                  <h2 className="services__modal-title">Web Developer</h2>

                  <ul className="services__modal-list grid">
                    <li className="services__modal-item">
                      Create professional and quality websites at the client's
                      request.
                    </li>

                    <li className="services__modal-item">
                      I do web design in prototypes.
                    </li>

                    <li className="services__modal-item">
                      I position your website with advanced SEO.
                    </li>

                    <li className="services__modal-item">
                      I solve performance problems on web pages.
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="services__card">
              <i className="ri-pen-nib-line services__icon"></i>
              <h2 className="services__title">Web Designer</h2>
              <p className="services__description">
                A way to stand out is to have an online prescence. Get a
                beautiful responsive website for your design
              </p>

              <button className="services__button button">Know More</button>

              <div className="services__modal">
                <div className="services__modal-content">
                  <i className="ri-close-line services__modal-close"></i>

                  <h2 className="services__modal-title">Web Designer</h2>

                  <ul className="services__modal-list grid">
                    <li className="services__modal-item">
                      Create professional and quality websites at the client's
                      request.
                    </li>

                    <li className="services__modal-item">
                      I do web design in prototypes.
                    </li>

                    <li className="services__modal-item">
                      I position your website with advanced SEO.
                    </li>

                    <li className="services__modal-item">
                      I solve performance problems on web pages.
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="services__card">
              <i className="ri-layout-line services__icon"></i>
              <h2 className="services__title">Interfaces UI/UX</h2>
              <p className="services__description">
                Beautiful and elegant designs with interfaces that are
                intuitive, efficient and pleasant to use for the user.
              </p>

              <button className="services__button button">Know More</button>
              {/*modal3*/}
              <div className="services__modal">
                <div className="services__modal-content">
                  <i className="ri-close-line services__modal-close"></i>

                  <h2 className="services__modal-title">Interfaces UI/UX</h2>

                  <ul className="services__modal-list grid">
                    <li className="services__modal-item">
                      Create professional and quality websites at the client's
                      request.
                    </li>

                    <li className="services__modal-item">
                      I do web design in prototypes.
                    </li>

                    <li className="services__modal-item">
                      I position your website with advanced SEO.
                    </li>

                    <li className="services__modal-item">
                      I solve performance problems on web pages.
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
      {/*Portfolio*/}
      <section className="portfolio section bd-container" id="portfolio">
        <span className="section-subtitle">My recent work</span>
        <h2 className="section-title">Portfolio</h2>

        <div className="portfolio__nav">
          <span className="portfolio__item active-portfolio" data-filter="all">
            All
          </span>
        </div>

        <div className="portfolio__container bd-grid">
          <div className="portfolio__content mix web">
            <a href="#" className="">
              <img
                src="https://images.pexels.com/photos/7147372/pexels-photo-7147372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Work 1"
                className="portfolio__img"
              />
            </a>
            <div className="portfolio__data">
              <span className="portfolio__subtitle">Web development</span>
              <a href="#">
                <h2 className="portfolio__title">
                  Real Estate Landing Page For Client
                </h2>
              </a>
              <a
                href="https://ringroadterritory.vercel.app/"
                className="button button-link"
              >
                View detail
              </a>
            </div>
          </div>

          <div className="portfolio__content mix ux">
            <a href="#" className="">
              <img
                src="https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Work 3"
                className="portfolio__img"
              />
            </a>
            <div className="portfolio__data">
              <span className="portfolio__subtitle">API-centric project.</span>
              <a href="#">
                <h2 className="portfolio__title">
                  Weather App With Integrated API's.
                </h2>
              </a>
              <a
                href="https://tusshweathers.netlify.app/"
                className="button button-link"
              >
                View detail
              </a>
            </div>
          </div>

          <div className="portfolio__content mix app">
            <a href="#" className="">
              <img
                src="https://images.unsplash.com/photo-1600856209809-8419414d351f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMwMzc1MjJ8&ixlib=rb-4.0.3&q=85"
                alt="Work 6"
                className="portfolio__img"
              />
            </a>
            <div className="portfolio__data">
              <span className="portfolio__subtitle">Mobile app</span>
              <a href="#">
                <h2 className="portfolio__title">
                  Web based app under construction for a client.
                </h2>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*About*/}
      <section class="responsive-container-block bigContainer">
        <div class="responsive-container-block Container">
          <div class="card">
            <img src={picture} alt="cv" />{" "}
          </div>
          <div class="allText aboveText">
            <p class="text-blk headingText">About Me</p>
            <div class="book">
              <div class="cover">
                <p className="page1">About Me</p>
              </div>

              <p id="about" className="page">
                {" "}
                I am a creative front-end developer, who aims to work with
                businesses and marginalized communities bringing digital
                implementations to life. I offer both design and development
                services for web applications and websites!
                <hr />
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1G5eoFm-0u4Y6q6HFQ4D12n7xFkzGVft5/view?usp=drive_link"
                >
                  <button className="inbtn">Click</button>
                </a>
                <hr />
                <hr /> <hr />
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*Footer */}
      <footer class="footer-distributed">
        <div class="footer-left">
          <div className="navbar-logo">
            <img src={icon} alt="icon" />
          </div>

          <p class="footer-links">
            <a href="/">Home</a>·<a href="#service">Services</a>·
            <a href="#about">About</a>·<a href="#portfolio">Portfolio</a>·
            <a href="#contact">Contact</a>
          </p>

          <p class="footer-company-name">Tussh © </p>

          <div class="footer-icons">
            <a href="https://x.com/boda_tussh?s=11&t=xcZnsqBYn_NrAUzaMozw-w">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="www.linkedin.com/in/adeduro-israel-703572234">
              <i class="fa fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div class="footer-right">
          <p>Contact Us</p>

          <form action="#" method="post" id="contact">
            <input type="text" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message"></textarea>
            <button>Send</button>
          </form>
        </div>
      </footer>
    </Fragment>
  );
}

export default App;

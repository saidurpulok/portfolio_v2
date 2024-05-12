import React from 'react';
import heroImg from '../images/hero/hero-img.svg';
import { AppContext } from '../context';
import { FaCode, FaEnvelope } from 'react-icons/fa';

export const Hero = () => {
  // function from context
  const { smoothScroll } = React.useContext(AppContext);

  // jsx
  return (
    <header id="home">
      <div className="banner">
        <div className="banner-container section-center">
          {/* hero-info */}
          <article className="hero-info">
            <h1 id="my-name">
              hey,<span> I'm Pulok</span>
            </h1>
            <p>
            A final year student at BUET, passionate about developing Machine Learning and Artificial Intelligence solutions. 
            Bringing together strong problem-solving skills and a keen interest in NLP to tackle real-world challenges.
            </p>
            <div className="hero-btn-container">
              <a
                href="#projects"
                className="btn hero-btn"
                onClick={(e) => smoothScroll(e)}
                title="My Latest Works"
              >
                projects <FaCode className="fa" />
              </a>
              <a
                href="mailto:saidurr13@gmail.com"
                className="btn hero-btn"
                title="Email Me Now"
              >
                contact <FaEnvelope className="fa" />
              </a>
            </div>
          </article>

          {/* hero-image */}
          <article className="hero-img">
            <img src={heroImg} alt="Hero" className="hero-image" />
          </article>
        </div>
      </div>
    </header>
  );
};

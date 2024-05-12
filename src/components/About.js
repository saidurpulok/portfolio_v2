import React from 'react';
import aboutImg from '../images/about/about-img.PNG';
import { Skills } from './Skills';

export const About = () => {
  // state
  const [age, setAge] = React.useState(20);

  React.useEffect(() => {
    setAge(
      Math.floor((new Date() - new Date('2000-05-06').getTime()) / 3.15576e10)
    );
  }, []);

  // jsx
  return (
    <section id="about" className="section about">
      <div className="section-title">
        <h2>
          <span>about</span> me
        </h2>
        <div className="underline"></div>
      </div>

      <div className="section-center about-center">
        {/* about-img  */}
        <article>
          <div className="about-img">
            <img
              src={aboutImg}
              alt="Durgesh"
              className="about-image"
              loading="lazy"
            />
          </div>
        </article>

        <article className="about-info">
          <p>
            {/* text */}
            I'm <strong>Pulok</strong>, a <span>{age}</span> year old
            <strong> AI/ML Developer</strong> with {age-23} year of experience in AI/ML and more than {age-22} years in Web Development.
            I work with Python and its endless list of libraries, primarily
            with <strong>PyTorch</strong>, <strong>TensorFlow</strong>,{' '}
            <strong>ScikitLearn</strong>, and <strong>Django</strong>.
            I also have good command in Javascript, ReactJS, Nodejs and SQL.
            <br />
            <br />
            When I'm not coding, I love to binge-watch pop culture stuff. I also
            love listening to music. I think it does help my creative side.
          </p>

          {/* stack */}
          <Skills />
        </article>
      </div>
    </section>
  );
};

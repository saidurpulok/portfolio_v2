import React, { useState, useEffect } from 'react';
import { Head, Loading, NavForPages } from '../components';
import aboutImg from '../images/about/about-img.PNG';
import AIRTABLE_DATA from '../data/airtableData';

const Links = () => {
  // state
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchResources = async () => {
    const resources = AIRTABLE_DATA.resources;
    setResources(resources);
    setLoading(false);
  };

  // useEffect
  useEffect(() => {
    fetchResources();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // jsx
  return (
    <>
      <Head
        title={'Saidur R. Rahman - AI/ML Developer | Links & Resources'}
        description={`Final year student at BUET, passionate about developing Machine Learning and Artificial Intelligence solutions. 
        Bringing together strong problem-solving skills and a keen interest in NLP to tackle real-world challenges.`}
        image={`/covers/resources.png`}
      />

      <div className="page links-page">
        {/* navbar */}
        <NavForPages />

        <section className="section">
          <article className="links-info">
            <div className="links-page-img">
              <img src={aboutImg} alt="Durgesh" className="links-page-image" />
            </div>
            <h4>Pulok</h4>
            <p>@saidurpulok</p>
          </article>

          <article className="section-center links-page-center">
            <h4>AI/ML Developer | Engineer </h4>

            {loading ? (
              <Loading />
            ) : (
              <>
                {resources
                  .sort((a, b) => a.order - b.order)
                  .map(
                    ({
                      id,
                      title,
                      iconUrl,
                      text,
                      url,
                      isLatest,
                      hideField,
                    }) => (
                      <a
                        href={url}
                        className={`
                          btn links-page-btn 
                          ${isLatest ? 'latest-link' : null}
                          ${hideField ? 'hide-link' : null}
                        `}
                        title={title}
                        key={id}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {text}
                        <img src={iconUrl} alt="icon" />
                      </a>
                    )
                  )}
              </>
            )}
          </article>
        </section>
      </div>
    </>
  );
};

export default Links;

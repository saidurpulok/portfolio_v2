import React from 'react';

export const Footer = () => {
  // states
  // const [date, setDate] = React.useState(2021);

  // useEffect
  // React.useEffect(() => {
  //   setDate(new Date().getFullYear());
  // }, []);

  // jsx
  return (
    <footer id="footer" className="footer">
      <div className="section-center">
        <p className="footer-text">
          Found an issue with this page?{' '}
          <a
            href="https://github.com/saidurpulok"
            target="_blank"
            rel="noreferrer"
            title="Full Source Code"
          >
            Fix it on GitHub
          </a>
        </p>

        {/* <p>Copyright &copy; {date}. All Rights Reserved.</p> */}

        {/* <p className="footer-text-2">
          Created with&nbsp;
          <span className="footer-img-block">
            <img src={react} alt="react-js" className="footer-img" />
            &nbsp;
            <img src={airtable} alt="airtable" className="footer-img" />
          </span>
          &nbsp;by&nbsp;
          <a
            href="https://twitter.com/77pulok"
            target="_blank"
            rel="noreferrer"
            title="My Twitter Account"
          >
            Pulok
          </a>
        </p> */}
      </div>
    </footer>
  );
};

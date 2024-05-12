import React from 'react';
import { Link } from 'react-router-dom';

export const NavAlert = () => {
  return (
    <section className="nav-alert">
      <span>
        🚀 Looking to hire a ML/AI Developer? {' '}
        <Link to="/contact">Contact me</Link> . 🚀
      </span>
    </section>
  );
};

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import { HomePage, ContactPage, ProjectsPage, ErrorPage, Links } from './pages';
// import components
import { Head, Contact, Footer, Widget, ScrollToTop } from './components';

const App = () => {
  return (
    <main>
      <Router>
        <ScrollToTop />
        <Head />
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route exact path="/projects" element={<ProjectsPage />}/>
          <Route exact path="/contact" element={<ContactPage />}/>
          <Route exact path="/links" element={<Links />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
        <Contact />
        <Footer />
        <Widget />
      </Router>
    </main>
  );
};

export default App;

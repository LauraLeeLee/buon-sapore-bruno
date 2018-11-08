import React from 'react';
import AboutHeader from './About_header.js';
// import AboutImages from './AboutImages.js';
import AboutText from './AboutText.js';

const AboutMe = props => {
  return(
    <React.Fragment>
      <AboutHeader />
      <main className="about_main">
        <AboutText />
      </main>
   </React.Fragment>
  );
}

export default AboutMe;

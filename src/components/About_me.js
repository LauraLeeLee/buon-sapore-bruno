import React from 'react';
import AboutHeader from './About_header.js';
import AboutImages from './AboutImages.js';
import AboutText from './AboutText.js';

const AboutMe = props => {
  return(
    <div className="">
      <AboutHeader />
      <main className="about_main">
        <AboutImages />
        <AboutText />
      </main>
   </div>
  );
}

export default AboutMe;

import React from 'react';
import Splash from './Splash';
import MedcertBlurb from './MedcertBlurb';
import WitnessBlurb from './WitnessBlurb';
import CVBlurb from './CVBlurb';


function Home() {
  return (
    <div>
      <Splash />
      <MedcertBlurb />
      <WitnessBlurb />
      <CVBlurb />
    </div>
  );
}

export default Home;

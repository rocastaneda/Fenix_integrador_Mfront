import React, { useEffect } from 'react';
import FooterPrincipal from '../components/FooterPrincipal';
import AdvancedJourney from '../components/AdvancedJourney';
import Header from '../components/Header';
import { store } from '../redux/store';
const AdvancedStep = () => {
  useEffect(() => {
    window['reduxStore'] = store;
  }, []);

  return (
    <>
      <Header />

      <AdvancedJourney />
      <FooterPrincipal />
    </>
  );
};

export default AdvancedStep;

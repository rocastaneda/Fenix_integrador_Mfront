import React, { useEffect } from 'react';
import TablaAmortizacion from '../components/TablaAmortizacion';
import FooterPrincipal from '../components/FooterPrincipal';
import { redirectNext } from '../redux/actions/genericActions';
import Header from '../components/Header';
import { store } from "../redux/store";

const ResultadoSimulador = () => {

  useEffect(() => {
    window["reduxStore"] = store;
  }, []);

  return (
    <div>
      <Header />
      <div style={{ paddingTop: '20px' }}>
        <TablaAmortizacion redirectNext={redirectNext} />
      </div>
      <div>
        <FooterPrincipal />
      </div>
    </div>
  );
};

export default ResultadoSimulador;

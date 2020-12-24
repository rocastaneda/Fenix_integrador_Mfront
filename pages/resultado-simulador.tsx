import React from 'react';
import TablaAmortizacion from '../components/TablaAmortizacion';
import TablaComparativa from '../components/TablaComparativa';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterPrincipal from '../components/FooterPrincipal';
import { redirectNext } from '../redux/actions/genericActions';
import Header from '../components/Header';

const ResultadoSimulador = () => {
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

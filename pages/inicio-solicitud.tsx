import React, { useEffect } from 'react';
import InicioSolicitud from '../components/InicioSolicitud';
import { redirectNext } from '../redux/actions/genericActions';
import Header from '../components/Header';
import FooterPrincipal from '../components/FooterPrincipal';
import styles from '../styles/InicioSolicitud.module.css';
import Link from 'next/link';
import iconBack from '../public/assets/images/atras-solid.svg';
import { store } from '../redux/store';

const InicioSolicitudView = () => {
  useEffect(() => {
    window['reduxStore'] = store;
  }, []);

  return (
    <>
      <Header />
      <div className={styles.boxtitle}>
        <Link href='/resultado-simulador'>
          <a className={styles.btnback}>
            <img src={iconBack} alt='atras' />
            Atrás
          </a>
        </Link>
      </div>
      <div>
        <InicioSolicitud redirectNext={redirectNext} />
        <div className={styles.footer_sticky_bottom}>
          <FooterPrincipal />
        </div>
      </div>
    </>
  );
};

export default InicioSolicitudView;

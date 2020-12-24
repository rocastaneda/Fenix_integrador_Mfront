import React from 'react';
import InicioSolicitud from '../components/InicioSolicitud';
import { redirectNext } from '../redux/actions/genericActions';
import Header from '../components/Header';
import FooterPrincipal from '../components/FooterPrincipal';
import styles from '../styles/InicioSolicitud.module.css';
import IconPhoneAssistant from '../components/shared/IconPhoneAssistant/IconPhoneAssistant';
import Link from 'next/link';
import iconBack from '../public/assets/images/atras-solid.svg';

const InicioSolicitudView = () => {
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
        <h3 className={styles.title}>Comencemos</h3>
        <p className={styles.detail}>En poco tiempo lograrás tus sueños</p>
        <InicioSolicitud redirectNext={redirectNext} />
        <IconPhoneAssistant isWithLayout={false} />
        <div className={styles.footer_sticky_bottom}>
          <FooterPrincipal />
        </div>
      </div>
    </>
  );
};

export default InicioSolicitudView;

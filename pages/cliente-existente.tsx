import React, { useState } from 'react';
import FlujoSolicitud from '../components/FlujoSolicitud';
import FooterPrincipal from '../components/FooterPrincipal';
import Header from '../components/Header';
import GenericButton from '../components/shared/generic-button';
import { triggerNextStep } from '../redux/actions/genericActions';
import Exist from '../components/acerca-de-ti/ClienteExistente';

const ClientExist = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Header />

      <div className='display_flex'>
        <div
          className={['funnel_wrapper', !show ? '' : 'display_none_funnel']
            .join(' ')
            .trim()}
        >
          <FlujoSolicitud />

          <GenericButton
            className={['button_center', 'hide_on_desktop_main ']
              .join(' ')
              .trim()}
            onClick={() => setShow(true)}
          >
            Continuar
          </GenericButton>
        </div>
        <div
          className={[
            show ? '' : 'display_none_funnel',
            'content_footer_global',
          ]
            .join(' ')
            .trim()}
        >
          <Exist triggerNextStep={triggerNextStep} />

          <div className='background-color_global'>
            <FooterPrincipal shortVersion className='version-corta' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientExist;

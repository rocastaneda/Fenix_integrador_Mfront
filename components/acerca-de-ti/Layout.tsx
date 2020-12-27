import React, { useState } from 'react';
import FlujoSolicitud from '../FlujoSolicitud';
import FooterPrincipal from '../FooterPrincipal';
import Header from '../Header';
import { useDispatch } from 'react-redux';
import GenericButton from '../shared/generic-button';
import { isAbsolute } from 'path';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  return (
    <div>
      <Header />

      <div
        style={{
          display: 'flex',
        }}
      >
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
          className={show ? '' : 'display_none_funnel'}
          style={{ flex: 1, background: '#FAFAFA' }}
        >
          {children}

          <div style={{ backgroundColor: '#65184e' }}>
            <FooterPrincipal shortVersion className='version-corta' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

import React from 'react';
import FlujoSolicitud from '../FlujoSolicitud';
import FooterPrincipal from '../FooterPrincipal';
import Header from '../Header';
import { useDispatch } from 'react-redux';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <div
        style={{
          display: 'flex',
        }}
      >
        <FlujoSolicitud />
        <div style={{ flex: 1, background: '#FAFAFA' }}>
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

import React, { useEffect } from 'react';
import Header from '../components/Header';
import RemoteLogin from '../components/RemoteLogin';
import { store } from '../redux/store';

const login = () => {
  useEffect(() => {
    window['reduxStore'] = store;
  }, []);

  return (
    <>
      <Header />
      <RemoteLogin />
    </>
  );
};

export default login;

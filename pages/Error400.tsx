import React from 'react';
import FooterPrincipal from '../components/FooterPrincipal';
import { redirectNext } from '../redux/actions/genericActions';
import Header from '../components/Header';
import Error400View from '../components/error/Error-400';

const Error400 = () => {
  return <Error400View />;
};

export default Error400;

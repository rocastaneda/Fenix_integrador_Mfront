import React, { useEffect } from 'react';
import Layout from '../components/acerca-de-ti/Layout';
import RequestCredit from '../components/RequestCredit';
import { store } from '../redux/store';

const RequestCreditPage = () => {
  useEffect(() => {
    window['reduxStore'] = store;
  }, []);

  return (
    <Layout>
      <RequestCredit />
    </Layout>
  );
};

export default RequestCreditPage;

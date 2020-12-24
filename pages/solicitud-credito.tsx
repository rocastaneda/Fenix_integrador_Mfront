import React from 'react';
import Layout from '../components/acerca-de-ti/Layout';
import RequestCredit from '../components/RequestCredit';
import IconPhoneAssistant from '../components/shared/IconPhoneAssistant/IconPhoneAssistant';

const RequestCreditPage = () => {
  return (
    <Layout>
      <RequestCredit />
      <IconPhoneAssistant isWithLayout={true} />
    </Layout>
  );
};

export default RequestCreditPage;

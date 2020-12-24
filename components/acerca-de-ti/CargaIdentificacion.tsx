import React from 'react';
import MfsUrl from '../../constants/MfUrls';
import RemoteWrapper from '../../utils/RemoteWrapper';

const registerClientModel = MfsUrl.registerClient;


const registerClient = ({ triggerNextStep, redirectNext }) => {
  return (
    <RemoteWrapper
      scope={registerClientModel.scope}
      module={registerClientModel.module}
      remoteUrl={registerClientModel.remoteUrl}
      triggerNextStep={triggerNextStep}
      redirectNext={redirectNext}
    />
  );
};

export default registerClient;

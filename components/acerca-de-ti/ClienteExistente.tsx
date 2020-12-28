import React from 'react';
import RemoteWrapper from '../../utils/RemoteWrapper';
import MfsUrl from '../../constants/MfUrls';

const clienteexistente = MfsUrl.clientExist;

const ClientExistModule = ({ triggerNextStep }) => {
  return (
    <div>
      <RemoteWrapper
        scope={clienteexistente.scope}
        module={clienteexistente.module}
        remoteUrl={clienteexistente.remoteUrl}
        triggerNextStep={triggerNextStep}
      />
    </div>
  );
};

export default ClientExistModule;

import React from 'react';
import MfsUrl from '../../constants/MfUrls';
import RemoteWrapper from '../../utils/RemoteWrapper';

const cargaIdentificacion = MfsUrl.acercaDeTi.cargaIdentificacion;

export const CargaIdentificacion = ({ triggerNextStep }) => {
  return (
    <RemoteWrapper
      scope={cargaIdentificacion.scope}
      module={cargaIdentificacion.module}
      remoteUrl={cargaIdentificacion.remoteUrl}
      triggerNextStep={triggerNextStep}
    />
  );
};

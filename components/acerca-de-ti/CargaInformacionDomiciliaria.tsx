import React from 'react'
import RemoteWrapper from '../../utils/RemoteWrapper';
import MfsUrl from '../../constants/MfUrls';

const cargaDomicilio = MfsUrl.acercaDeTi.cargaInformacionDomiciliaria;

const CargaInformacionDomiciliaria = () => {
  return (
    <div>
      <RemoteWrapper
        scope={cargaDomicilio.scope}
        module={cargaDomicilio.module}
        remoteUrl={cargaDomicilio.remoteUrl}
      />
    </div>
  )
}

export default CargaInformacionDomiciliaria;

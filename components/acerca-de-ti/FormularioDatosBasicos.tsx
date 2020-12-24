import React from 'react';
import RemoteWrapper from '../../utils/RemoteWrapper';
import MfsUrl from '../../constants/MfUrls';

const cargaDatosBasico = MfsUrl.acercaDeTi.datosBasicos;

const FormularioDatosBasicos = ({ triggerNextStep }) => {
  return (
    <div style={{ width: 402, height: 523, margin: '48px auto' }}>
      <RemoteWrapper
        scope={cargaDatosBasico.scope}
        module={cargaDatosBasico.module}
        remoteUrl={cargaDatosBasico.remoteUrl}
        triggerNextStep={triggerNextStep}
      />
    </div>
  );
};

export default FormularioDatosBasicos;

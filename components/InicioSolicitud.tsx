import React, { FC } from 'react';
import RemoteWrapper from '../utils/RemoteWrapper';
import MfsUrl from '../constants/MfUrls';

const stepperInicioSolicitud = MfsUrl.inicioSolicitud;

interface InicioSolicitudProps {
  redirectNext: Function;
}

const InicioSolicitud: FC<InicioSolicitudProps> = ({
  redirectNext,
}: InicioSolicitudProps) => {
  return (
    <RemoteWrapper
      scope={stepperInicioSolicitud.scope}
      module={stepperInicioSolicitud.module}
      remoteUrl={stepperInicioSolicitud.remoteUrl}
      redirectNext={redirectNext}
    />
  );
};

export default InicioSolicitud;

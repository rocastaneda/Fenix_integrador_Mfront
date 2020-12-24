import React from 'react';
import RemoteWrapper from '../utils/RemoteWrapper';
import { modalShowState } from '../redux/actions/genericActions';
import MfsUrl from '../constants/MfUrls';

const funnelFlujoSolicitudMf = MfsUrl.funnelFlujoSolicitudMf;

const FlujoSolicitud = () => {
  return (
    <RemoteWrapper
      scope={funnelFlujoSolicitudMf.scope}
      module={funnelFlujoSolicitudMf.module}
      remoteUrl={funnelFlujoSolicitudMf.remoteUrl}
      modalShowState={modalShowState}
    />
  );
};

export default FlujoSolicitud;

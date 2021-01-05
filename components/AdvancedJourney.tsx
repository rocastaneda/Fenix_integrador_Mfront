import React, { FC } from 'react';
import RemoteWrapper from '../utils/RemoteWrapper';
import MfsUrl from '../constants/MfUrls';

const advancedSolicitud = MfsUrl.advancedSolicitud;

const AdvancedJourney: FC = () => {
  return (
    <RemoteWrapper
      scope={advancedSolicitud.scope}
      module={advancedSolicitud.module}
      remoteUrl={advancedSolicitud.remoteUrl}
    />
  );
};

export default AdvancedJourney;

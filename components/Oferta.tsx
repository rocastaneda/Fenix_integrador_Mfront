import React, { FC } from 'react';
import RemoteWrapper from '../utils/RemoteWrapper';
import MfsUrl from '../constants/MfUrls';

const ofertaMf = MfsUrl.ofertaMf;

const TablaComparativa: FC = () => {
  return (
    <RemoteWrapper
      scope={ofertaMf.scope}
      module={ofertaMf.module}
      remoteUrl={ofertaMf.remoteUrl}
    />
  );
};

export default TablaComparativa;

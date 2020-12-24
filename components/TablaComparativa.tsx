import React, { FC } from 'react';
import RemoteWrapper from '../utils/RemoteWrapper';
import MfsUrl from '../constants/MfUrls';

const tablaComparativaMf = MfsUrl.tablaComparativaMf;

interface TablaComparativaProps {
  redirectNext: Function;
}

const TablaComparativa: FC<TablaComparativaProps> = ({ redirectNext }) => {
  return (
    <RemoteWrapper
      scope={tablaComparativaMf.scope}
      module={tablaComparativaMf.module}
      remoteUrl={tablaComparativaMf.remoteUrl}
      redirectNext={redirectNext}
    />
  );
};

export default TablaComparativa;

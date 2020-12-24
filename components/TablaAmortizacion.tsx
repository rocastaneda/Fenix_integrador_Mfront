import React, { FC } from 'react';
import RemoteWrapper from '../utils/RemoteWrapper';
import MfsUrl from '../constants/MfUrls';

const tablaAmortizacionMf = MfsUrl.tablaAmortizacionMf;
interface TablaAmortizacionProps {
  redirectNext: Function;
}

const TablaAmortizacion: FC<TablaAmortizacionProps> = ({ redirectNext }) => {
  return (
    <RemoteWrapper
      scope={tablaAmortizacionMf.scope}
      module={tablaAmortizacionMf.module}
      remoteUrl={tablaAmortizacionMf.remoteUrl}
      redirectNext={redirectNext}
    />
  );
};

export default TablaAmortizacion;

import React from 'react';
import RemoteWrapper from '../utils/RemoteWrapper';
import MfsUrl from '../constants/MfUrls';
import { makeSimRequest } from '../redux/actions/makeSimRequest';

const homeFormularioSimulacionMf = MfsUrl.homeFormularioSimulacionMf;

interface FormularioPrestamoProps {
  className?: string;
  makeSimRequest?: Function;
}

const FormularioSimulacionPrestamo = ({
  className,
}: FormularioPrestamoProps) => {
  return (
    <RemoteWrapper
      scope={homeFormularioSimulacionMf.scope}
      module={homeFormularioSimulacionMf.module}
      remoteUrl={homeFormularioSimulacionMf.remoteUrl}
      className={className}
      makeSimRequest={makeSimRequest}
    />
  );
};

export default FormularioSimulacionPrestamo;

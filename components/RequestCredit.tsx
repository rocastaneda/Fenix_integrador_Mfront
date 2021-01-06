import React, { FC } from 'react';
import MfsUrl from '../constants/MfUrls';
import RemoteWrapper from '../utils/RemoteWrapper';

interface requestClientProps {
  redirectNext?: Function;
}

const requestCreditClient = MfsUrl.requestCredit;

const RequestCredit: FC<requestClientProps> = ({
  redirectNext,
}: requestClientProps) => {
  return (
    <RemoteWrapper
      scope={requestCreditClient.scope}
      module={requestCreditClient.module}
      remoteUrl={requestCreditClient.remoteUrl}
      redirectNext={redirectNext}
    />
  );
};

export default RequestCredit;

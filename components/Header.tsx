import React from 'react';
import RemoteWrapper from '../utils/RemoteWrapper';
import MfsUrl from '../constants/MfUrls';

const homeHeaderMf = MfsUrl.homeHeaderMf;

const Header = () => {
  return (
    <RemoteWrapper
      scope={homeHeaderMf.scope}
      module={homeHeaderMf.module}
      remoteUrl={homeHeaderMf.remoteUrl}
    />
  );
};

export default Header;

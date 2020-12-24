import React, { FC } from 'react';
import RemoteWrapper from '../utils/RemoteWrapper';
import MfsUrl from '../constants/MfUrls';
import styles from '../styles/footerPrincipal.module.css';

const homeFooterMf = MfsUrl.homeFooterMf;

interface FooterProps {
  className?: string;
  shortVersion?: boolean;
}

const FooterPrincipal: FC<FooterProps> = ({ className, shortVersion }) => {
  return shortVersion ? (
    <RemoteWrapper
      key='short'
      scope={homeFooterMf.scope}
      module={homeFooterMf.module}
      remoteUrl={homeFooterMf.remoteUrl}
      className={[className, styles.short, styles.version].join(' ').trim()}
      shortVersion
    />
  ) : (
    <RemoteWrapper
      key='default'
      scope={homeFooterMf.scope}
      module={homeFooterMf.module}
      remoteUrl={homeFooterMf.remoteUrl}
      className={className}
    />
  );
};

export default FooterPrincipal;

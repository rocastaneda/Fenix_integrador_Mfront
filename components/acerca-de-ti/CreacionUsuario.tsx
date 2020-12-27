import React from 'react';
import RemoteWrapper from '../../utils/RemoteWrapper';
import MfsUrl from '../../constants/MfUrls';
import styles from '../../styles/CreacionUsuario.module.css';

const creacionUsuario = MfsUrl.createUser;

const CreacionUsuario = ({ triggerNextStep }) => {
  return (
    <div className={styles.createuserbox}>
      <RemoteWrapper
        scope={creacionUsuario.scope}
        module={creacionUsuario.module}
        remoteUrl={creacionUsuario.remoteUrl}
        triggerNextStep={triggerNextStep}
      />
    </div>
  );
};

export default CreacionUsuario;

import React, { FC } from 'react';
import styles from './iconphone.module.css';
import LogoPhone from '../../../public/assets/images/Negro.svg';

interface IconPhoneProps {
  isWithLayout: boolean;
}

const IconPhoneAssistant: FC<IconPhoneProps> = ({
  isWithLayout,
}: IconPhoneProps) => {
  const classBtn = isWithLayout ? styles.btnphone_layout : styles.btnphone;

  return (
    <div className={styles.boxphone}>
      <button className={classBtn} type='button'>
        <img alt='logo' src={LogoPhone} />
      </button>
    </div>
  );
};

export default IconPhoneAssistant;

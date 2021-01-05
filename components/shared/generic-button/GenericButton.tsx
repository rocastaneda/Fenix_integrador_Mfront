/* eslint-disable react/require-default-props */
import React, { FC, ReactElement, ReactNode } from 'react';
import Next from '../../../public/assets/images/Siguiente.svg';
import NextDisabled from '../../../public/assets/images/SiguienteDisabled.svg';
import styles from './GenericButton.module.css';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  text?: string;
}

const GenericButton: FC<ButtonProps> = ({
  children,
  className,
  disabled,
  onClick,
  text,
}: ButtonProps): ReactElement => {
  return (
    <div className={[styles.component, className].join(' ').trim()}>
      <button
        className={styles.button}
        {...{ disabled, text }}
        onClick={onClick}
        type='button'
      >
        {children || text}
        {/* <img src={disabled === true ? NextDisabled : Next} alt='Siguiente' /> */}
      </button>
    </div>
  );
};

export default GenericButton;

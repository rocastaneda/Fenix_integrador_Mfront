import React, { FC, ReactElement } from 'react';
import styles from '../../../styles/Error500.module.css';

const Error500: FC = (): ReactElement => {
  return (
    <div>
      <div>
        <p>Préstamo Simple</p>
      </div>
      <div className={styles.conainer_error}>
        <h1 className={styles.error}>Error 500</h1>
        <p className={styles.info}>
          Lo sentimos... parece que hay un error de conexión, prueba cargardo la
          página nuevamente.
        </p>
        <div>
          <p className={styles.link}>
            {' '}
            <a className={styles.ref_color} href=''>
              Volver a cargar esta página
            </a>{' '}
            o regresar al{' '}
            <a className={styles.ref_color} href=''>
              Inicio.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error500;

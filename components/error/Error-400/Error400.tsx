import React, { FC, ReactElement } from 'react';
import styles from '../../../styles/Erro400.module.css';
import Siguiente from '../../../public/assets/images/Siguiente.svg';

const Error400: FC = (): ReactElement => {
  return (
    <div>
      <div>
        <p>Préstamo Simple</p>
      </div>
      <div className={styles.conainer_error}>
        <h1 className={styles.error}>Error 404</h1>
        <p className={styles.info}>
          Esta página ya no existe, pero podemos ayudarte a encontrar lo que
          necesitas:
        </p>
        <div className={styles.container_input}>
          <div className={styles.div_input}>
            <input
              type='text'
              name='input'
              id='input'
              placeholder='Busca algo sobre préstamos, sucursales, pagos y más'
              className={styles.floating_label_input}
            />
          </div>
          <div className={styles.div_button}>
            <button id='button' className={styles.button_general}>
              Buscar
              <img
                className={styles.button_img}
                id=''
                src={Siguiente}
                alt='siguente'
              />
            </button>
          </div>
        </div>
        <div>
          <p className={styles.link}>
            También, puedes visitar las{' '}
            <a className={styles.ref_color} href=''>
              Preguntas frecuentes
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

export default Error400;

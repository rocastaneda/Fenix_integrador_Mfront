import { Entry } from 'contentful';
import React, { useEffect } from 'react';
import Head from 'next/head';
import FormularioSimulacionPrestamo from '../components/FormularioSimulacionPrestamo';
import FooterPrincipal from '../components/FooterPrincipal';
import { getContentfulContent } from '../services/contenful/api';
import indexStyle from '../styles/Index.module.css';
import { store } from '../redux/store';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import { getTokenRequest } from '../redux/actions/getTokenRequest';
import { getSession } from '../redux/actions/getSessionRequest';
import { makeSimRequest } from '../redux/actions/makeSimRequest';

export async function getServerSideProps(): Promise<{
  props: {
    fields: unknown;
  };
}> {
  const res = await getContentfulContent();
  const { fields }: Entry<unknown> = res.items[0];

  return {
    props: {
      fields,
    },
  };
}

let onlyOnMobileIndex = 0;

const IndexComponent = ({ fields }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    onlyOnMobileIndex = Math.floor(Math.random() * 3);
    window['reduxStore'] = store;
    dispatch(getTokenRequest());
    dispatch(getSession());

    return () => {
      onlyOnMobileIndex = 0;
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#fafafa',
        maxWidth: 1400,
        margin: '0 auto',
      }}
    >
      <Head>
        <title>{fields.tituloSeo}</title>
        <meta name='description' content={fields.descripcionSeo} />
        <meta name='robots' content='index' />
      </Head>
      <Header />
      <div
        className={indexStyle.banner}
        style={{
          backgroundImage: `url(${fields.imagenFondo.fields.file.url})`,
        }}
      >
        <div className={indexStyle.titulo_y_descripcion}>
          <h2
            className={indexStyle.titulo_texto_2}
            style={{
              color: '#283238',
            }}
          >
            {/* Préstamo Simple */}
            {fields.subtituloPagina}
          </h2>
          <h1
            className={indexStyle.titulo_texto_1}
            style={{
              color: '#000A12',
            }}
          >
            {/* Simula tu préstamo */}
            {fields.tituloPagina}
          </h1>
          <h3
            className={indexStyle.titulo_texto_3}
            style={{
              color: '#515B62',
            }}
          >
            {/* Ingresa los siguientes datos, descubre una oferta y logra tus
            sueños. */}
            {fields.descripcionPagina}
          </h3>
        </div>
      </div>
      <div className={indexStyle.invert_on_tablet}>
        <div
          className={[
            indexStyle.titulo_y_descripcion,
            indexStyle.contenedor_lista,
          ]
            .join(' ')
            .trim()}
          style={{ padding: '8px 0' }}
        >
          <ul
            className={indexStyle.bullet_list}
            style={{
              color: '#676767',
            }}
          >
            {[
              'Obtén la mejor oferta para ti',
              'Tus datos estarán siempre protegidos',
              '¿Estás listo? Inicia tu solicitud',
            ].map((texto, index) => (
              <li
                key={index}
                className={[
                  onlyOnMobileIndex === index
                    ? indexStyle.show_on_mobile
                    : indexStyle.hide_on_mobile,
                ]
                  .join(' ')
                  .trim()}
              >
                {texto}
              </li>
            ))}
          </ul>
        </div>

        <FormularioSimulacionPrestamo
          className={indexStyle.formulario_simulacion}
          makeSimRequest={makeSimRequest}
        />
      </div>
      <FooterPrincipal />
    </div>
  );
};

export default IndexComponent;

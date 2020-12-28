export default Object.freeze({
  homeHeaderMf: {
    module: './FenixHeader',
    scope: 'FenixHeader',
    remoteUrl: 'https://fnx-header-766876.netlify.app/remoteEntry.js',
  },
  homeFormularioSimulacionMf: {
    module: './FenixFormularioSimuladorPrestamo',
    scope: 'FenixFormularioSimuladorPrestamo',
    remoteUrl: 'https://fnx-formulario-sim-3c68b2.netlify.app/remoteEntry.js',
  },
  homeFooterMf: {
    module: './FenixFooterHome',
    scope: 'FenixFooterHome',
    remoteUrl: 'https://fnx-footer-home-c83ea5.netlify.app/remoteEntry.js',
  },
  funnelFlujoSolicitudMf: {
    module: './RequestFlow',
    scope: 'journeyMF',
    remoteUrl: 'https://fnx-joruney-v2-7fb5f8.netlify.app/remoteEntry.js',
    // remoteUrl: 'http://localhost:4000/remoteEntry.js',
  },
  tablaAmortizacionMf: {
    module: './TablasView',
    scope: 'fnxRecomendaciones',
    remoteUrl: 'https://fnx-recomendaciones-ae740a.netlify.app/remoteEntry.js',
    //remoteUrl: 'http://localhost:5000/remoteEntry.js',
  },
  tablaComparativaMf: {
    module: './TablaComparativaView',
    scope: 'tablaComparativaMf',
    remoteUrl:
      'https://fnx-tabla-comparativa-20b8b3.netlify.app/remoteEntry.js',
    //remoteUrl: 'http://localhost:4000/remoteEntry.js',
  },
  inicioSolicitud: {
    module: './Stepper',
    scope: 'journeyMF',
    remoteUrl: 'https://fnx-joruney-v2-7fb5f8.netlify.app/remoteEntry.js',
    //remoteUrl: 'http://localhost:4000/remoteEntry.js',
  },
  createUser: {
    module: './CreateUserNavigator',
    scope: 'createUserMicro',
    remoteUrl: 'https://fnx-creacion-usuario-58b4ef.netlify.app/remoteEntry.js',
  },
  registerClient: {
    module: './RegisterClient',
    scope: 'microFrontRegisterClient',
    remoteUrl: 'https://fnx-registro-cliente-d5c6f3.netlify.app/remoteEntry.js',
    // remoteUrl: 'http://localhost:4200/remoteEntry.js',
  },
  requestCredit: {
    module: './NavigatorRequestCredit',
    scope: 'RequestCredit',
    remoteUrl: 'https://fnx-solicitud-credito.netlify.app/remoteEntry.js',
  },
  clientExist: {
    module: './ClientExist',
    scope: 'createUserMicro',
    remoteUrl: 'https://fnx-creacion-usuario-58b4ef.netlify.app/remoteEntry.js',
    // remoteUrl: 'http://localhost:4000/remoteEntry.js',
  },
});

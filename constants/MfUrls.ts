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
    remoteUrl: 'https://fnx-joruney-v2-7fb5f8.netlify.app',
    // remoteUrl: 'http://localhost:4000/remoteEntry.js',
  },
  tablaAmortizacionMf: {
    module: './TablaDetalleView',
    scope: 'tablaDetalleMf',
    remoteUrl: 'https://fnx-tabla-amort-e66c76.netlify.app/remoteEntry.js',
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
    remoteUrl: 'https://fnx-joruney-v2-7fb5f8.netlify.app',
    // remoteUrl: 'http://localhost:4000/remoteEntry.js',
  },
  acercaDeTi: {
    datosBasicos: {
      module: './AcercaDeTiDatosBasicos',
      scope: 'AcercaDeTiDatosBasicos',
      remoteUrl:
        'https://fnx-acerca-datos-bascicos-5384a5.netlify.app/remoteEntry.js',
    },
    codigoVerificacion: {
      module: './AcercaDeTiCodigo',
      scope: 'AcercaDeTiCodigo',
      remoteUrl: 'https://fnx-acerca-codigo-da335a.netlify.app/remoteEntry.js',
    },
    cargaIdentificacion: {
      module: './CargaDeIdentificacion',
      scope: 'CargaDeIdentificacion',
      remoteUrl:
        'https://carga-identificacion-7f0376.netlify.app/remoteEntry.js',
      //remoteUrl: 'http://localhost:4000/remoteEntry.js',
    },
    cargaInformacionDomiciliaria: {
      module: './UploadHomeInformation',
      scope: 'uploadHomeInformation',
      remoteUrl:
        'https://fenix-carga-rapida-informacion-domicilio.netlify.app/remoteEntry.js',
    },
  },
});

interface InitialState {
  resultadoSim: {
    pagoTotal: string;
    tipoPrestamo: string;
    tablaAmortizacion: {
      cartas: {};
      tabla: [];
    };
    tablaComparativa: { nmp: {}; competencia: {} };
  };
  infoTakingSession: { step: string; actionNav: string };
  journeyData: Record<string, any>;
  sessionMeta: { montoMinimo: string; montoMaximo: string };
  loading: boolean;
  error: boolean;
  errorMessage: string;
  tknMeta: { access_token: string; refresh_token: string };
  modal: { activate: boolean };
}

export const initialState: InitialState = {
  resultadoSim: {
    pagoTotal: '',
    tipoPrestamo: '',
    tablaAmortizacion: { cartas: {}, tabla: [] },
    tablaComparativa: { nmp: {}, competencia: {} },
  },
  infoTakingSession: { step: '', actionNav: '' },
  journeyData: {},
  sessionMeta: { montoMinimo: '', montoMaximo: '' },
  loading: false,
  error: false,
  errorMessage: '',
  tknMeta: { access_token: '', refresh_token: '' },
  modal: { activate: false },
};

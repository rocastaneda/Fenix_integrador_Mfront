import actionTypes from '../constants/actionTypes';
import update from 'immutability-helper';
import { initialState } from './initialState';

export const nextReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    //initial token request
    case actionTypes['request/TOKEN_START']: {
      const newData = update(state, {
        loading: { $set: true },
      });
      return newData;
    }

    case actionTypes['request/TOKEN_SUCCESS']: {
      const newData = update(state, {
        loading: { $set: false },
        tknMeta: {
          access_token: { $set: action.payload.access_token },
          refresh_token: { $set: action.payload.refresh_token },
        },
        error: { $set: false },
        errorMessage: { $set: '' },
      });

      return newData;
    }

    case actionTypes['request/TOKEN_FAILURE']: {
      const newData = update(state, {
        loading: { $set: false },
        error: { $set: true },
        errorMessage: { $set: action.payload.message },
      });

      return newData;
    }
    //initial token request

    //
    //
    //

    //product and session request
    case actionTypes['request/SESSION_START']: {
      const newData = update(state, {
        loading: { $set: true },
      });

      return newData;
    }

    case actionTypes['request/SESSION_SUCCESS']: {
      const newData = update(state, {
        sessionMeta: {
          montoMinimo: { $set: action.payload.montoMinimo },
          montoMaximo: { $set: action.payload.montoMaximo },
        },
        loading: { $set: false },
        error: { $set: false },
        errorMessage: { $set: '' },
      });

      return newData;
    }

    case actionTypes['request/SESSION_FAILURE']: {
      const newData = update(state, {
        loading: { $set: false },
        error: { $set: true },
        errorMessage: { $set: action.payload.message },
        sessionMeta: {
          montoMinimo: { $set: '' },
          montoMaximo: { $set: '' },
        },
      });

      return newData;
    }
    //product and session request

    //
    //
    //

    //Journey request

    case actionTypes['request/JOURNEY_START']: {
      const newData = update(state, {
        loading: { $set: true },
      });

      return newData;
    }

    case actionTypes['request/JOURNEY_SUCCESS']: {
      const newData = update(state, {
        loading: { $set: false },
        journeyData: { $set: action.payload },
        error: { $set: false },
        errorMessage: { $set: '' },
      });

      return newData;
    }

    case actionTypes['request/JOURNEY_FAILURE']: {
      const newData = update(state, {
        loading: { $set: false },
        error: { $set: true },
        errorMessage: { $set: action.payload.message },
        journeyData: { $set: {} },
      });

      return newData;
    }

    //Journey request

    //
    //
    //

    //sim request
    case actionTypes['request/SIM_START']: {
      const newData = update(state, {
        loading: { $set: true },
      });
      return newData;
    }

    case actionTypes['request/SIM_SUCCESS']: {
      const newData = update(state, {
        loading: { $set: false },
        errorMessage: { $set: '' },
        error: { $set: false },
        resultadoSim: {
          pagoTotal: { $set: action.payload.valorPrestamo },
          tipoPrestamo: { $set: action.payload.tipoPrestamo },
          tablaAmortizacion: {
            tabla: { $set: action.payload.tablaAmortizacion.tabla },
            cartas: { $set: action.payload.tablaAmortizacion.cartas },
          },
          tablaComparativa: {
            nmp: { $set: action.payload.tablaComparativa.nmp },
            competencia: { $set: action.payload.tablaComparativa.competencia },
          },
        },
      });

      return newData;
    }

    case actionTypes['request/SIM_FAILURE']: {
      const newData = update(state, {
        loading: { $set: false },
        error: { $set: true },
        errorMessage: { $set: action.payload.message },
        resultadoSim: {
          tablaAmortizacion: { tabla: { $set: [] }, cartas: { $set: {} } },
          tablaComparativa: { nmp: { $set: {} }, competencia: { $set: {} } },
          pagoTotal: { $set: '' },
        },
      });

      return newData;
    }
    //sim request

    //
    //
    //

    //trigger next switcher step
    case actionTypes['switcher/TRIGGER_NEXT_STEP']: {
      const newData = update(state, {
        infoTakingSession: {
          step: { $set: action.payload.step },
          actionNav: {
            $set: action.payload.actionNav ? action.payload.actionNav : '',
          },
        },
      });

      return newData;
    }
    //Action show modal
    case actionTypes['action/SHOW_MODAL']: {
      const newData = update(state, {
        modal: {
          activate: { $set: action.payload.activate },
        },
      });

      return newData;
    }
    //trigger next switcher step

    default:
      return state;
  }
};

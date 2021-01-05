import Router from 'next/router';
import getSimResultFromClient from '../../services/nmp-api/client/getSimResultFromClient';
import actionTypes from '../constants/actionTypes';
import { store } from '../store';

export const makeSimRequest = (data: {
  cuantoNecesitasValue: string;
  cuantoPuedesPagarValue: string;
  frecuencia: string;
}) => {
  return (dispatch: (action: { type: string; payload?: any }) => void) => {
    dispatch(request());

    const dataFormatted = {
      monto: data.cuantoNecesitasValue,
      cuota: data.cuantoPuedesPagarValue,
      tipoPrestamo: data.frecuencia === 'Al mes' ? 'MENSUAL' : 'QUINCENAL',
    };

    const token = store.getState().nextHost.tknMeta.access_token;

    try {
      getSimResultFromClient(
        token,
        dataFormatted.monto,
        dataFormatted.cuota,
        dataFormatted.tipoPrestamo
      )
        .then((value) => {
          const payload = {
            valorPrestamo: dataFormatted.monto,
            tipoPrestamo: dataFormatted.tipoPrestamo,
            tablaAmortizacion: {
              tabla:
                value.recomendacionesCredito[0].simulacion.tablaAmortizacion,
              cartas: {
                interesTotal:
                  value.recomendacionesCredito[0].simulacion.interesTotal,
                intenteresPorCadaMil:
                  value.recomendacionesCredito[0].simulacion
                    .intenteresPorCadaMil,
                tasaInteres:
                  value.recomendacionesCredito[0].subProducto.tasaPromedio,
              },
            },
            tablaComparativa: {
              nmp: {
                plazo: value.recomendacionesCredito[0].subProducto.plazoMeses,
                pagoTotal: value.recomendacionesCredito[0].simulacion.pagoTotal,
                pagoMensual:
                  value.recomendacionesCredito[0].simulacion.pagoPlazo,
              },
              competencia: {
                plazo: value.recomendacionesCredito[1].subProducto.plazoMeses,
                pagoTotal: value.recomendacionesCredito[1].simulacion.pagoTotal,
                pagoMensual:
                  value.recomendacionesCredito[1].simulacion.pagoPlazo,
              },
            },
          };

          dispatch(success(payload));
          Router.push('resultado-simulador');
        })
        .catch((error) => {
          dispatch(failure(`error getting sim result: ${error}`));
        });
    } catch (error) {
      dispatch(failure(`error getting sim result: ${error}`));
    }
  };

  function request() {
    return { type: actionTypes['request/SIM_START'] };
  }

  function success(data: any) {
    return {
      type: actionTypes['request/SIM_SUCCESS'],
      payload: data,
    };
  }

  function failure(error: string) {
    return {
      type: actionTypes['request/SIM_FAILURE'],
      payload: { message: error },
    };
  }
};

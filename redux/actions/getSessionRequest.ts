import getSessionFromClient from '../../services/nmp-api/client/getSessionFromClient';
import actionTypes from '../constants/actionTypes';

export const getSession = () => {
  return (dispatch: (action: { type: string; payload?: any }) => void) => {
    dispatch(request());

    try {
      getSessionFromClient()
        .then((value) => {
          const data = {
            montoMinimo: value.rule.montoMinimo,
            montoMaximo: value.rule.montoMaximo,
          };

          dispatch(success(data));
        })
        .catch((error) => {
          dispatch(failure(`error in request: ${error}`));
        });
    } catch (error) {
      dispatch(failure(`error in request: ${error}`));
    }
  };

  function request() {
    return { type: actionTypes['request/SESSION_START'] };
  }

  function success(data: any) {
    return {
      type: actionTypes['request/SESSION_SUCCESS'],
      payload: { montoMinimo: data.montoMinimo, montoMaximo: data.montoMaximo },
    };
  }

  function failure(error: string) {
    return {
      type: actionTypes['request/SESSION_FAILURE'],
      payload: { message: error },
    };
  }
};

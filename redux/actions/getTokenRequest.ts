import getJourneyFromClient from '../../services/nmp-api/client/getJourneyFromClient';
import getTokenFromClient from '../../services/nmp-api/client/getTokenFromClient';
import actionTypes from '../constants/actionTypes';

export const getTokenRequest = () => {
  return (dispatch: (action: { type: string; payload?: any }) => void) => {
    dispatch(request());

    try {
      getTokenFromClient()
        .then((value) => {
          const payload = {
            refresh_token: value.refresh_token,
            access_token: value.access_token,
          };

          dispatch(success(payload));

          dispatch(requestJourney());

          getJourneyFromClient(payload.access_token)
            .then((data) => {
              const payload = {
                folioJourney: data.folioJourney,
                idEstado: data.idEstado,
                estado: data.estado,
              };

              dispatch(successJourney(payload));
            })
            .catch((error) => {
              dispatch(failureJourney(`error making request: ${error}`));
            });
        })
        .catch((error) => {
          dispatch(failure(`error in request: ${error}`));
        });
    } catch (error) {
      dispatch(failure(`error in request: ${error}`));
    }
  };

  function request() {
    return { type: actionTypes['request/TOKEN_START'] };
  }

  function success(data: any) {
    return {
      type: actionTypes['request/TOKEN_SUCCESS'],
      payload: {
        access_token: data.access_token,
        refresh_token: data.refresh_token,
      },
    };
  }

  function failure(error: string) {
    return {
      type: actionTypes['request/TOKEN_FAILURE'],
      payload: { message: error },
    };
  }

  //journey actions

  function requestJourney() {
    return { type: actionTypes['request/JOURNEY_START'] };
  }

  function successJourney(data: any) {
    return {
      type: actionTypes['request/JOURNEY_SUCCESS'],
      payload: data,
    };
  }

  function failureJourney(error: string) {
    return {
      type: actionTypes['request/JOURNEY_FAILURE'],
      payload: { message: error },
    };
  }
};

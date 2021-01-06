import Axios, { AxiosRequestConfig } from 'axios';
import getEnvVars from '../../environment';

const getJourneySessionEnvs = getEnvVars().getJourneySession.requestData;

const {
  base_url_oag,
  custom_header_usuario,
  custom_header_auth_token,
  custom_header_idConsumidor,
  custom_header_idDestino,
  journey_body_idAplicacion,
  journey_body_tag,
} = getJourneySessionEnvs;

const getJourneySessionRequest = async (
  token: string,
  isNextState?: boolean
) => {
  const date = new Date();

  const data = {
    idAplicacion: journey_body_idAplicacion,
    fecha: date.toISOString(),
    tag: journey_body_tag,
  };

  const config: AxiosRequestConfig = {
    method: 'post',
    url: base_url_oag,
    headers: {
      usuario: custom_header_usuario,
      idConsumidor: custom_header_idConsumidor,
      idDestino: custom_header_idDestino,
      'oauth.bearer': token,
      Authorization: `Basic ${custom_header_auth_token}`,
      'Content-Type': 'application/json',
    },
    data: data,
  };

  const request = Axios(config)
    .then((value) => value.data)
    .catch((error) =>
      console.log(error.response ? error.response.data : error.message)
    );

  return await request;
};

export default getJourneySessionRequest;

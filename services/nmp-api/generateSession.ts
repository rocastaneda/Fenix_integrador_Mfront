import Axios, { AxiosRequestConfig } from 'axios';
import getEnvVars from '../../environment';

const generateSessionEnvs = getEnvVars().getGenerateSession.requestData;

const {
  base_url_oag,
  custom_header_usuario,
  custom_header_auth_token,
  custom_header_idConsumidor,
  custom_header_idDestino,
} = generateSessionEnvs;

const generateSession = async (token: string) => {
  const headers = {
    usuario: custom_header_usuario,
    idConsumidor: custom_header_idConsumidor,
    idDestino: custom_header_idDestino,
    'oauth.bearer': token,
    authorization: `Basic ${custom_header_auth_token}`,
  };

  const config: AxiosRequestConfig = {
    method: 'get',
    url: base_url_oag,
    headers: headers,
  };

  const request = Axios(config)
    .then((value) => value.data)
    .catch((error) => console.log(error));

  return await request;
};

export default generateSession;

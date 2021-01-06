import Axios, { AxiosRequestConfig } from 'axios';
import qs from 'querystring';
import getEnvVars from '../../environment';

const getAuthTokenEnvs = getEnvVars().getAuthToken.requestData;

const {
  base_url_oag,
  custom_header_usuario,
  custom_header_auth_token,
  custom_header_idConsumidor,
  custom_header_idDestino,
} = getAuthTokenEnvs;
const {
  grant_type,
  password,
  scope,
  username,
} = getAuthTokenEnvs.encoded_body_basic_auth;

const getAuthToken = async () => {
  const bodyToEncode = {
    grant_type: grant_type,
    username: username,
    password: password,
    scope: scope,
  };

  const config: AxiosRequestConfig = {
    method: 'post',
    url: base_url_oag,
    headers: {
      usuario: custom_header_usuario,
      idConsumidor: custom_header_idConsumidor,
      idDestino: custom_header_idDestino,
      Authorization: `Basic ${custom_header_auth_token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify(bodyToEncode),
  };

  const request = Axios(config)
    .then((value) => value.data)
    .catch((error) => console.log(error));

  return await request;
};

export default getAuthToken;

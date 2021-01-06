import { EnvVariables } from './EnvVariables';

const productionEnv: EnvVariables = {
  getAuthToken: {
    requestData: {
      base_url_oag: '',
      custom_header_idConsumidor: '',
      custom_header_idDestino: '',
      custom_header_usuario: '',
      custom_header_auth_token: '',
      encoded_body_basic_auth: {
        grant_type: '',
        password: '',
        scope: '',
        username: '',
      },
    },
  },
  getGenerateSession: {
    requestData: {
      base_url_oag: '',
      custom_header_idConsumidor: '',
      custom_header_idDestino: '',
      custom_header_usuario: '',
      custom_header_auth_token: '',
    },
  },
  getJourneySession: {
    requestData: {
      base_url_oag: '',
      custom_header_idConsumidor: '',
      custom_header_idDestino: '',
      custom_header_usuario: '',
      custom_header_auth_token: '',
      journey_body_idAplicacion: '',
      journey_body_tag: '',
    },
  },
};

export const production = Object.freeze(productionEnv);

import { envAccess } from './envAccess';
import { EnvVariables } from './EnvVariables';

const {
  header_id_consumidor,
  header_id_destino,
  header_usuario,
  header_auth_token,
  header_unidadOrganizacional,
  header_canal,
  base_url,
  body_id_application,
  body_tag,
  body_moneda,
  body_sistemasAmortizacion,
  body_frecuencia,
  body_idProducto,
  body_idSubProducto,
} = envAccess;

const developmentEnv: EnvVariables = {
  getAuthToken: {
    requestData: {
      base_url_oag: `${base_url}/NMP/oauth2/v1`,
      custom_header_idConsumidor: header_id_consumidor,
      custom_header_idDestino: header_id_destino,
      custom_header_usuario: header_usuario,
      custom_header_auth_token: header_auth_token,
      encoded_body_basic_auth: {
        grant_type: 'password',
        password: '36yRdwSJm',
        scope: 'UserProfile.me',
        username: 'Srvapifnxdev',
      },
    },
  },
  getGenerateSession: {
    requestData: {
      base_url_oag: `${base_url}/api/productos/v1/producto/304/subproducto/FENIX`,
      custom_header_idConsumidor: header_id_consumidor,
      custom_header_idDestino: header_id_destino,
      custom_header_usuario: header_usuario,
      custom_header_auth_token: header_auth_token,
    },
  },
  getJourneySession: {
    requestData: {
      base_url_oag: `${base_url}/api/journey/v1/customer/journey/next`,
      custom_header_idConsumidor: header_id_consumidor,
      custom_header_idDestino: header_id_destino,
      custom_header_usuario: header_usuario,
      custom_header_auth_token: header_auth_token,
      journey_body_idAplicacion: body_id_application,
      journey_body_tag: body_tag,
    },
  },
  makeSimRequest: {
    requestData: {
      base_url_oag: `${base_url}/api/productos/v1/credito/recomendacion`,
      custom_header_idConsumidor: header_id_consumidor,
      custom_header_idDestino: header_id_destino,
      custom_header_usuario: header_usuario,
      custom_header_auth_token: header_auth_token,
      custom_header_unidadOrganizacional: header_unidadOrganizacional,
      custom_header_canal: header_canal,
      journey_body_idProducto: body_idProducto,
      journey_body_idSubproducto: body_idSubProducto,
      journey_body_moneda: body_moneda,
      journey_body_sistemaAmortizacion: body_sistemasAmortizacion,
    },
  },
};

export const development = Object.freeze(developmentEnv);

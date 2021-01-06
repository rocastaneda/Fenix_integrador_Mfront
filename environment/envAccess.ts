import { encode } from './utils/base64';

const BASIC_AUTH_USERNAME = 'fenix';
const BASIC_AUTH_PASSWORD = 'JqNyGDmWnxm0';

const envAccessVars = {
  header_id_consumidor: '51',
  header_id_destino: '20',
  header_usuario: 'usuario',
  header_unidadOrganizacional: 'FMP',
  header_canal: 'web',
  header_auth_token: encode(`${BASIC_AUTH_USERNAME}:${BASIC_AUTH_PASSWORD}`),
  base_url: 'https://iamdr.montepiedad.com.mx:4444',
  body_id_application: 'Fenix-demo-01',
  body_tag: 'fenix',
  body_moneda: 'PESOS_MEXICANOS',
  body_sistemasAmortizacion: 'FRANCES',
  body_frecuencia: 'MENSUAL',
  body_idProducto: '304',
  body_idSubProducto: 'FENIX',
};

export const envAccess = Object.freeze(envAccessVars);

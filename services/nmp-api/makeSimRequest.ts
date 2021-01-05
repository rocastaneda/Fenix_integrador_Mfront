import Axios, { AxiosRequestConfig } from 'axios';
import getEnvVars from '../../environment';

const makeSimRequestEnvs = getEnvVars().makeSimRequest.requestData;

const {
  base_url_oag,
  custom_header_auth_token,
  custom_header_idConsumidor,
  custom_header_idDestino,
  custom_header_unidadOrganizacional,
  custom_header_canal,
  journey_body_idProducto,
  journey_body_idSubproducto,
  journey_body_moneda,
  journey_body_sistemaAmortizacion,
} = makeSimRequestEnvs;

const makeSimRequest = async (
  token: string,
  monto: string,
  cuota: string,
  tipoPrestamo: string
) => {
  const data = {
    producto: {
      idProducto: journey_body_idProducto,
      idSubProducto: journey_body_idSubproducto,
    },
    tipoCredito: {
      proposito: 'Bienes para el hogar',
      tipo: 'Préstamos Personales',
    },
    monto: { montoSolicitado: monto },
    cuota: { cuota: cuota, tipoCuota: 'FIJA' },
    frecuencia: tipoPrestamo,
    moneda: journey_body_moneda,
    sistemasAmortizacion: journey_body_sistemaAmortizacion,
  };

  const config: AxiosRequestConfig = {
    method: 'post',
    url: base_url_oag,
    headers: {
      canal: custom_header_canal,
      unidadOrganizacional: custom_header_unidadOrganizacional,
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
    .catch((error) => console.log(error));

  return await request;
};

export default makeSimRequest;

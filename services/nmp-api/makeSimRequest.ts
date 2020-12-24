import Axios, { AxiosRequestConfig } from 'axios';

const makeSimRequest = async (
  token: string,
  monto: string,
  cuota: string,
  tipoPrestamo: string
) => {
  const data = {
    producto: { idProducto: '304', idSubProducto: 'FENIX' },
    tipoCredito: {
      proposito: 'Bienes para el hogar',
      tipo: 'Préstamos Personales',
    },
    monto: { montoSolicitado: monto },
    cuota: { cuota: cuota, tipoCuota: 'FIJA' },
    frecuencia: tipoPrestamo,
    moneda: 'PESOS_MEXICANOS',
    sistemasAmortizacion: 'FRANCES',
  };

  const config: AxiosRequestConfig = {
    method: 'post',
    url:
      'https://iamdr.montepiedad.com.mx:4444/api/productos/v1/credito/recomendacion',
    headers: {
      canal: 'web',
      unidadOrganizacional: 'FMP',
      idConsumidor: '51',
      idDestino: '20',
      'oauth.bearer': token,
      Authorization: 'Basic ZmVuaXg6SnFOeUdEbVdueG0w',
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

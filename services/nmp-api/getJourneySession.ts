import Axios, { AxiosRequestConfig } from 'axios';

const getJourneySessionRequest = async (
  token: string,
  isNextState?: boolean
) => {
  const date = new Date();

  const data = {
    idAplicacion: 'Fenix-demo-01',
    fecha: date.toISOString(),
    tag: 'fenix',
  };

  const config: AxiosRequestConfig = {
    method: 'post',
    url:
      'https://iamdr.montepiedad.com.mx:4444/api/journey/v1/customer/journey/next',
    headers: {
      usuario: 'usuario',
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
    .catch((error) =>
      console.log(error.response ? error.response.data : error.message)
    );

  return await request;
};

export default getJourneySessionRequest;

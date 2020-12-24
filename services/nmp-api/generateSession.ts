import Axios, { AxiosRequestConfig } from 'axios';

const generateSession = async (token: string) => {
  const headers = {
    usuario: 'usuario',
    idConsumidor: '51',
    idDestino: '20',
    'oauth.bearer': token,
    authorization: 'Basic ZmVuaXg6SnFOeUdEbVdueG0w',
  };

  const config: AxiosRequestConfig = {
    method: 'get',
    url:
      'https://iamdr.montepiedad.com.mx:4444/api/productos/v1/producto/304/subproducto/FENIX',
    headers: headers,
  };

  const request = Axios(config)
    .then((value) => value.data)
    .catch((error) => console.log(error));

  return await request;
};

export default generateSession;
